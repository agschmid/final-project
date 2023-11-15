import React from 'react'
import * as THREE from 'three'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


function GlowSquare(props) {
  const glow = useLoader(TextureLoader, '/textures/glow.png')

  let glowSquare = useStore((s) => s.glowSquare)


  return (
    <mesh
      ref={glowSquare}
      {...props}
      >
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial 
        map={glow}
        transparent= {true} 
      />
    </mesh>
  )
}

export default GlowSquare;