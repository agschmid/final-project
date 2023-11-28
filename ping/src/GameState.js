// https://github.com/akarlsten/cuberun/blob/main/src/components/GameState.js
// TODO: take a bunch of the general game logic from this one

import { useFrame } from '@react-three/fiber'
import { useStore } from './state/useStore'
import {Howl} from 'howler';


var drum = new Howl({
    preload:true,
    src: ['stab.wav'],
});

var hit = new Howl({
    preload:true,
    volume: 0.05,
    src: ['hit.wav'],
});

const ballSelector = s => s.ball
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



let svx=0
let svy=0 //TODO check best way to set velocity
let svz = -1


export default function GameState() {
//   const camera = useThree(state => state.camera)

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

  const currentScore = useStore(currentScoreSelector)
  const setCurrentScore = useStore(setCurrentScoreSelector)

  let paddleBrightness = useStore(paddleBrightnessSelector)
  let setPaddleBrightness = useStore(setPaddleBrightnessSelector)

  const setGlowVals = useStore(setGlowValsSelector);

  const gameVariables = useStore(gameVariablesSelector)
  const speedMultiplier = useStore(speedMultiplierSelector)
  const setSpeedMultiplier = useStore(setSpeedMultiplierSelector)

  const gameWidth = gameVariables.gameWidth
  const gameLength = gameVariables.gameLength
  const ballRadius = gameVariables.ballRadius
  const paddleWidth = gameVariables.paddleWidth
  const paddleHeight = paddleWidth
  const ballBounds = gameWidth/2 - ballRadius;


  useFrame(({pointer}, delta) => {
    if (gamePlaying && overlay!=='playing'){
        return null
    }

    if (ball.current){
        if (paddleBrightness>0){
            setPaddleBrightness(paddleBrightness-0.05)
        } //TODO also do enenmy brightness here
        if (Math.abs(ball.current.position.x)>=ballBounds){
            svx =-svx 
        }
        if (Math.abs(ball.current.position.y)>=ballBounds){
            svy = -svy
        }
        if (ball.current.position.z <= -gameLength){
            svz = -svz
            if (speedMultiplier<=30) {setSpeedMultiplier(speedMultiplier+0.5)}
        }

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

        if (ball.current.position.z>2){
            svx=0
            svy=0
            svz=-1
            if (currentScore>highScore){ setHighScore(currentScore)}
            setSpeedMultiplier(5)
            setGamePlaying(false)
            setOverlay('end')
        }

        
        ball.current.position.z = Math.max(-gameLength, ball.current.position.z + positionDelta * svz);
        ball.current.position.x = Math.max(-ballBounds, Math.min(ballBounds, ball.current.position.x + positionDelta * svx));
        ball.current.position.y = Math.max(-ballBounds, Math.min(ballBounds, ball.current.position.y + positionDelta * svy));
        enemy.current.position.x = ball.current.position.x
        enemy.current.position.y = ball.current.position.y

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
    if (paddle.current){
        paddle.current.position.y = pointer.y
        paddle.current.position.x = pointer.x
    }
  })

  
  return null
}




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

