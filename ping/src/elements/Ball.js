import React from 'react'
import { useStore } from '../state/useStore'


function Ball(props) {
  let ball = useStore((s) => s.ball)

  return (
    <mesh
      {...props}
      ref={ball}
      >
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default Ball;