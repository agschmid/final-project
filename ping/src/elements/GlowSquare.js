import React, { forwardRef } from 'react'
import { useStore } from '../state/useStore'


const GlowSquare = forwardRef(function(props, ref) {
  let gameInfo = useStore((s) => s.gameVariables)
  const delta = 0.01
  return (
    <mesh ref={ref}>
    <mesh
      {...props}
      position={[gameInfo.gameWidth/2-delta,0,0+props.z]}
      rotation={[Math.PI/2,-Math.PI/2,0]}
      >
      <planeGeometry args={[gameInfo.gameWidth, 0.02]}/>
      <meshStandardMaterial 
      color={'#D06CD6'}
      emissive = {'#D06CD6'} emissiveIntensity = {props.glow}
      />
    </mesh>
    <mesh
    {...props}
    position={[-gameInfo.gameWidth/2+delta,0,0+props.z]}
    rotation={[-Math.PI/2,Math.PI/2,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth, 0.02]}/>
    <meshStandardMaterial 
      color={'#D06CD6'}
      emissive = {'#D06CD6'} emissiveIntensity = {props.glow}

    />
  </mesh>
  <mesh
      {...props}
      position={[0,gameInfo.gameWidth/2-delta,0+props.z]}
      rotation={[Math.PI/2,0,0]}
      >
      <planeGeometry args={[gameInfo.gameWidth, 0.02]}/>
      <meshStandardMaterial 
      color={'#D06CD6'}
      emissive = {'#D06CD6'} emissiveIntensity = {props.glow}

      />
    </mesh>
    <mesh
    {...props}
    position={[0,-gameInfo.gameWidth/2+delta,0+props.z]}
    rotation={[-Math.PI/2,0,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth, 0.02]}/>
    <meshStandardMaterial 
      color={'#D06CD6'}
      emissive = {'#D06CD6'} emissiveIntensity = {props.glow}

    />
  </mesh>
  </mesh>
  )
})

export default GlowSquare;