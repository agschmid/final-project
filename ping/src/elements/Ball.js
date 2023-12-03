import React from 'react'
import { useStore } from '../state/useStore'

// The Orange Ball
function Ball(props) {
  let ball = useStore((s) => s.ball)
  let gameInfo = useStore((s) => s.gameVariables)
  
  return (
    <mesh
      {...props}
      ref={ball}
      >
      <sphereGeometry args={[gameInfo.ballRadius, 32, 16]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default Ball;