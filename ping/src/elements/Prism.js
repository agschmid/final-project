import React from 'react'
import * as THREE from 'three'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


function Prism(props) {
  const grid = useLoader(TextureLoader, './textures/grid-pink.png')
  grid.wrapS = THREE.RepeatWrapping;
  grid.wrapT = THREE.RepeatWrapping;
  grid.offset.set( 0, 0 );
  grid.repeat.set( 5, 5 );

  let prism = useStore((s) => s.prism)


  return (
    <mesh
      ref={prism}
      {...props}
      >
      <boxGeometry args={[5, 5, 20]} />
      <meshStandardMaterial 
        receiveShadow 
        map={grid}
        side={THREE.BackSide} 
      />
    </mesh>
  )
}

export default Prism;