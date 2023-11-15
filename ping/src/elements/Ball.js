import React from 'react'
import { useStore } from '../state/useStore'

const color = 'orange' 

function Ball(props) {
  let ball = useStore((s) => s.ball)

  return (
    <mesh
      {...props}
      ref={ball}
      >
      <sphereGeometry args={[0.5, 32, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Ball;