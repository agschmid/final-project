import { useFrame } from '@react-three/fiber'
import { useStore } from './useStore'
import {Howl} from 'howler';
import { useThree } from "@react-three/fiber";

// Loading all my selectors to read/set global variables
const ballSelector = s => s.ball
const setCursorStyleSelector = s => s.setCursorStyle
const cursorStyleSelector = s => s.cursorStyle
const paddleSelector = s => s.paddle
const enemySelector = s => s.enemy
const playingSelector = s => s.gamePlaying
const overlaySelector = s => s.overlay
const paddleBrightnessSelector = s => s.paddleBrightness
const setPaddleBrightnessSelector = s => s.setPaddleBrightness
const gameVariablesSelector = s => s.gameVariables
const setSpeedMultiplierSelector = s => s.setSpeedMultiplier
const speedMultiplierSelector = s => s.speedMultiplier
const setGlowValsSelector = s => s.setGlowVals
const glowValsSelector = s => s.glowVals
const setOverlaySelector = s => s.setOverlay
const setGamePlayingSelector = s => s.setGamePlaying
const currentScoreSelector = s => s.currentScore
const setCurrentScoreSelector = s => s.setCurrentScore
const highScoreSelector = s => s.highScore
const setHighScoreSelector = s => s.setHighScore
const storedOptionsSelector = s => s.storedOptions

// Setting the initial velocities
let svx=0
let svy=0 
let svz = -1

// Loading audio elements that are triggered by the game
var hit = new Howl({
    preload:true,
    src: ['./audio/hit.wav'],
});

var enemyHit = new Howl({
    preload:true,
    src: ['./audio/hit.wav'],
});


// Component that handles all the game changes with a single frame loop
export default function GameState() {
    // Finish loading all the components
    const ball = useStore(ballSelector)
    const paddle = useStore(paddleSelector)
    const enemy = useStore(enemySelector)
    const gamePlaying = useStore(playingSelector)
    const overlay = useStore(overlaySelector)
    const setOverlay = useStore(setOverlaySelector)
    const setGamePlaying = useStore(setGamePlayingSelector)
    const highScore = useStore(highScoreSelector)
    const setHighScore = useStore(setHighScoreSelector)
    const glowVals = useStore(glowValsSelector)
    const setCursorStyle = useStore(setCursorStyleSelector)
    const cursorStyle = useStore(cursorStyleSelector)
    const currentScore = useStore(currentScoreSelector)
    const setCurrentScore = useStore(setCurrentScoreSelector)
    let paddleBrightness = useStore(paddleBrightnessSelector)
    let setPaddleBrightness = useStore(setPaddleBrightnessSelector)
    const setGlowVals = useStore(setGlowValsSelector);
    const gameVariables = useStore(gameVariablesSelector)
    const storedOptions = useStore(storedOptionsSelector)
    const speedMultiplier = useStore(speedMultiplierSelector)
    const setSpeedMultiplier = useStore(setSpeedMultiplierSelector)
    const gameWidth = gameVariables.gameWidth
    const gameLength = gameVariables.gameLength
    const ballRadius = gameVariables.ballRadius
    const paddleWidth = storedOptions.paddleWidth
    const speedAdd = parseFloat(storedOptions.speed)
    const paddleHeight = paddleWidth
    const ballBounds = gameWidth/2 - ballRadius;
    let windowWidth, windowHeight
    const volume = parseFloat(storedOptions.volume)/100


    // Set the game sounds volume based on global value
    hit.volume(0.3*volume)
    enemyHit.volume(0.1*volume)

    // Adjust the camera position to always contain the game
    useThree(({ camera }) => {
        camera.position.z = Math.max(3, (gameWidth/2) / (Math.tan(camera.fov * Math.PI/360) * camera.aspect))
        windowWidth = visibleWidthAtZDepth(camera.position.z, camera)
        windowHeight = visibleHeightAtZDepth(camera.position.z, camera)
    });

    // The frame looping function
    useFrame(({pointer}, delta) => {

        // If the game isn't playing, don't update the state of anything, set the cursor to default
        if (gamePlaying && overlay!=='playing'){
            setCursorStyle('default')
            return null
        }

        // If the game is playing, the game logic follows

        if (ball.current){
            // Lower paddle brightness if it has been hit recently
            if (paddleBrightness>0){
                setPaddleBrightness(paddleBrightness-0.05)
            }

            // Bounce the ball of the walls if it hits them
            if (Math.abs(ball.current.position.x)>=ballBounds){
                svx =-svx 
            }
            if (Math.abs(ball.current.position.y)>=ballBounds){
                svy = -svy
            }

            // Bounce the ball back from the enemy and speed it up 
            if (ball.current.position.z <= -gameLength){
                svz = -svz
                if (speedMultiplier<=30) {setSpeedMultiplier(speedMultiplier+speedAdd)}
                enemyHit.play()
            }

            // Calculate if the player hit the ball
            const positionDelta = speedMultiplier * delta;
            if (ball.current.position.z<=-ballRadius && ball.current.position.z>=-ballRadius-positionDelta*svz){
                const xDif = paddle.current.position.x-ball.current.position.x
                const yDif = paddle.current.position.y-ball.current.position.y
                const a=Math.abs(xDif)
                const b=Math.abs(yDif)
                if (didPaddleHit(a-ballRadius*paddleWidth,b-ballRadius*paddleHeight, ballRadius)){
                    let alpha = a*2/paddleWidth
                    let beta = b*2/paddleHeight
            
                    let vScale = (1 / (alpha**2 + beta**2 + 1))**0.5
                    svx = -Math.sign(xDif)*vScale*alpha
                    svy = -Math.sign(yDif)*vScale*beta
                    svz = -1*vScale
                    setPaddleBrightness(0.5)
                    hit.play()
                    setCurrentScore(currentScore+1)
                }
            }

            // If player missed the ball, end the game
            if (ball.current.position.z>2){
                svx=0
                svy=0
                svz=-1
                if (currentScore>highScore){ setHighScore(currentScore)}
                setSpeedMultiplier(5)
                setGamePlaying(false)
                setCursorStyle('default')
                setOverlay('end')
            }

            // Update the ball and enemy position
            ball.current.position.z = Math.max(-gameLength, ball.current.position.z + positionDelta * svz);
            ball.current.position.x = Math.max(-ballBounds, Math.min(ballBounds, ball.current.position.x + positionDelta * svx));
            ball.current.position.y = Math.max(-ballBounds, Math.min(ballBounds, ball.current.position.y + positionDelta * svy));
            enemy.current.position.x = ball.current.position.x
            enemy.current.position.y = ball.current.position.y

            // Update grid lighting based on the ball position
            if (ball.current.position.z<0) {
                let lightGrid = Array(10).fill(0.5);
                let index = Math.abs(Math.round(ball.current.position.z))-1
                lightGrid[index] = 5
                if (! (JSON.stringify(lightGrid) === JSON.stringify(glowVals))){
                    // drum.play()
                    setGlowVals(lightGrid);
                }
            }

        }

        // Cut off the paddle at the edge of the play area. 
        if (paddle.current){
            paddle.current.position.y = Math.max(Math.min(pointer.y*windowHeight/2, gameWidth/2-paddleWidth/2), -gameWidth/2+paddleWidth/2)
            paddle.current.position.x = Math.max(Math.min(pointer.x*windowWidth/2, gameWidth/2-paddleWidth/2), -gameWidth/2+paddleWidth/2)
            
            // Make the cursor invisible if in play area
            if ((Math.abs(pointer.y*windowHeight/2) < gameWidth/2) && (Math.abs(pointer.x*windowWidth/2) < gameWidth/2) && overlay ==='playing'){
                if (cursorStyle !== 'none') {
                    setCursorStyle('none')
                }
            }

            // Make the cursor visible if outside of play area
            else {
                if (cursorStyle !== 'default') {
                    setCursorStyle('default')
                }
            }
        }
    })

    return null
}


// Calcuation if the circle of the ball is within the paddle
//https://stackoverflow.com/questions/47639413/algorithm-for-accurate-detection-of-overlap-between-a-square-and-a-circle
function didPaddleHit(a, b, radius){
    if (a>0) {
        if (b>0) {
            return a**2 + b**2<radius**2;
        } else {
            return a<radius;
        }
    } else {
        return b<radius;
    }
}


// Calculations for the height and width of the 3D view based on the camera and depth
// https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269

const visibleHeightAtZDepth = ( depth, camera ) => {
    // compensate for cameras not positioned at z=0
    const cameraOffset = camera.position.z;
    if ( depth < cameraOffset ) depth -= cameraOffset;
    else depth += cameraOffset;

    // vertical fov in radians
    const vFOV = camera.fov * Math.PI / 180; 

    // Math.abs to ensure the result is always positive
    return Math.tan( vFOV / 2 ) * Math.abs( depth );
};

const visibleWidthAtZDepth = ( depth, camera ) => {
    const height = visibleHeightAtZDepth( depth, camera );
    return height * camera.aspect;
};