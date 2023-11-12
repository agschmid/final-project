// https://github.com/akarlsten/cuberun/blob/main/src/components/GameState.js
// TODO: take a bunch of the general game logic from this one

import { useFrame } from '@react-three/fiber'

import { useStore } from './state/useStore'

const ballSelector = s => s.ball
const paddleSelector = s => s.paddle
let paddleWidth = 1
let paddleHeight = 1

export default function GameState() {
  const ball = useStore(ballSelector)
  const paddle = useStore(paddleSelector)
  let ballDirection = -1
  let ballRadius = 1
  let svx=0
  let svy=0 //TODO check best way to set velocity
  let svz = 1

  useFrame(({pointer}, delta) => {
    if (ball.current){
        if (ball.current.position.x>=2 || ball.current.position.x<=-2){
            svx =-svx //TODO - there's a better way to do this. 
        }
        if (ball.current.position.y>=2 || ball.current.position.y<=-2){
            svy = -svy
        }
        if (ball.current.position.z >= 0 || ball.current.position.z <= -10){
            svz = -svz
        }

        if (ball.current.position.z>=0){
            let a=Math.abs(paddle.current.position.x-ball.current.position.x)
            let b=Math.abs(paddle.current.position.y-ball.current.position.y)
            if (didPaddleHit(a-0.5*paddleWidth,b-0.5*paddleHeight, ballRadius)){
                ballDirection=-1
                let alpha = a*2/paddleWidth
                let beta = b*2/paddleHeight
        
                let vScale = (1 / (alpha**2 + beta**2 + 1))**0.5
        
                svx = Math.sign(paddle.current.position.x-ball.current.position.x)*vScale*alpha
                svy = Math.sign(paddle.current.position.y-ball.current.position.y)*vScale*beta
                svz = vScale
            } else {
                svz=0
                svx=0
                svy=0
            }
        }

        ball.current.position.z += 5*svz*ballDirection*delta;
        ball.current.position.x += 5*svx*ballDirection*delta;
        ball.current.position.y += 5*svy*ballDirection*delta;

        ball.current.position.x = Math.max(-2, Math.min(2, ball.current.position.x))
        ball.current.position.y = Math.max(-2, Math.min(2, ball.current.position.y))
        ball.current.position.z = Math.max(-10, Math.min(0, ball.current.position.z))


    }
    if (paddle.current){
        paddle.current.position.x = pointer.x*2;
        paddle.current.position.y = pointer.y*2;
    }
  })

  return <mesh></mesh>
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

