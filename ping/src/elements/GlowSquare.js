import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


function GlowSquare(props) {
  const glow = useLoader(TextureLoader, './textures/glow.png')

  let glowSquare = useStore((s) => s.glowSquare)
  let gameInfo = useStore((s) => s.gameVariables)

  return (
    <mesh
      ref={glowSquare}
      {...props}
      >
      <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameWidth]} />
      <meshStandardMaterial 
        map={glow}
        transparent= {true} 
      />
    </mesh>
  )
}

export default GlowSquare;