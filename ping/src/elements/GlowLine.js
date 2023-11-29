import React from 'react'


const GlowLine = (props) => {
  return (
    <mesh>
      <mesh {...props}
        >
        
        <planeGeometry args={[props.length, 0.02]}/>
        <meshStandardMaterial 
        color={'#D06CD6'}
        emissive = {'#D06CD6'} emissiveIntensity = {!props.glow || 1}
        />
      </mesh>
  </mesh>
  )
}

export default GlowLine;