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
    <mesh ref={prism}>
    <mesh
      {...props}
      position={[2.5,0,-5]}
      rotation={[Math.PI/2,-Math.PI/2,0]}
      >
      <planeGeometry args={[5, 10]}/>
      {/* <boxGeometry args={[5, 5, 20]} /> */}
      <meshStandardMaterial 
        receiveShadow 
        map={grid}
      />
    </mesh>
    <mesh
    {...props}
    position={[-2.5,0,-5]}
    rotation={[-Math.PI/2,Math.PI/2,0]}
    >
    <planeGeometry args={[5, 10]}/>
    {/* <boxGeometry args={[5, 5, 20]} /> */}
    <meshStandardMaterial 
      receiveShadow 
      map={grid}
    />
  </mesh>
  <mesh
      {...props}
      position={[0,2.5,-5]}
      rotation={[Math.PI/2,0,0]}
      >
      <planeGeometry args={[5, 10]}/>
      {/* <boxGeometry args={[5, 5, 20]} /> */}
      <meshStandardMaterial 
        receiveShadow 
        map={grid}
      />
    </mesh>
    <mesh
    {...props}
    position={[0,-2.5,-5]}
    rotation={[-Math.PI/2,0,0]}
    >
    <planeGeometry args={[5, 10]}/>
    {/* <boxGeometry args={[5, 5, 20]} /> */}
    <meshStandardMaterial 
      receiveShadow 
      map={grid}
    />
  </mesh>
  </mesh>
  )
}

export default Prism;