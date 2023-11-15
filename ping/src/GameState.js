// https://github.com/akarlsten/cuberun/blob/main/src/components/GameState.js
// TODO: take a bunch of the general game logic from this one

import { useFrame } from '@react-three/fiber'

import { useStore } from './state/useStore'

const ballSelector = s => s.ball
const paddleSelector = s => s.paddle
const playingSelector = s => s.gamePlaying
const overlaySelector = s => s.overlay
const glowSquareSelector = s => s.glowSquare


const paddleWidth = 1
const paddleHeight = 1
const speedMultiplier = 5;
const ballRadius = 0.5
let svx=0
let svy=0 //TODO check best way to set velocity
let svz = 1

export default function GameState() {
  const ball = useStore(ballSelector)
  const paddle = useStore(paddleSelector)
  const gamePlaying = useStore(playingSelector)
  const overlay = useStore(overlaySelector)
  const glowSquare = useStore(glowSquareSelector)


  useFrame(({pointer}, delta) => {
    if (gamePlaying && overlay!=='playing'){
        return null
    }

    if (ball.current){
        if (Math.abs(ball.current.position.x)>=2){
            svx =-svx 
        }
        if (Math.abs(ball.current.position.y)>=2){
            svy = -svy
        }
        if (ball.current.position.z >= -0.5 || ball.current.position.z <= -10){
            svz = -svz
        }

        if (ball.current.position.z>= -0.5){
            const xDif = paddle.current.position.x-ball.current.position.x
            const yDif = paddle.current.position.y-ball.current.position.y
            const a=Math.abs(xDif)
            const b=Math.abs(yDif)
            if (didPaddleHit(a-0.5*paddleWidth,b-0.5*paddleHeight, ballRadius)){
                let alpha = a*2/paddleWidth
                let beta = b*2/paddleHeight
        
                let vScale = (1 / (alpha**2 + beta**2 + 1))**0.5
                svx = -Math.sign(xDif)*vScale*alpha
                svy = -Math.sign(yDif)*vScale*beta
                svz = ((svz>=0) ? 1 : -1)*vScale
            } else {
                svz=0
                svx=0
                svy=0
            }
        }

        const positionDelta = speedMultiplier * delta;
        
        ball.current.position.z = Math.max(-10, Math.min(-0.5, ball.current.position.z + positionDelta * svz));
        glowSquare.current.position.z = ball.current.position.z;
        ball.current.position.x = Math.max(-2, Math.min(2, ball.current.position.x + positionDelta * svx));
        ball.current.position.y = Math.max(-2, Math.min(2, ball.current.position.y + positionDelta * svy));
    }
    if (paddle.current){
        paddle.current.position.x = pointer.x*2;
        paddle.current.position.y = pointer.y*2;
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

