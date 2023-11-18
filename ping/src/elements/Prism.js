import React from 'react'
import { useStore } from '../state/useStore'
import {GradientTexture} from '@react-three/drei'


function Prism(props) {
  let prism = useStore((s) => s.prism)
  let gameInfo = useStore((s) => s.gameVariables)


  return (
    <mesh ref={prism}>
    <mesh
      {...props}
      position={[gameInfo.gameWidth/2,0,-gameInfo.gameLength/2]}
      rotation={[Math.PI/2,-Math.PI/2,0]}
      >
      <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameLength]}/>
      <meshBasicMaterial>
      receiveShadow
        <GradientTexture
          stops={[1,0]} // As many stops as you want
          colors={['#591E56', '#090060']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
      </meshBasicMaterial>
    </mesh>
    <mesh
    {...props}
    position={[-gameInfo.gameWidth/2,0,-gameInfo.gameLength/2]}
    rotation={[-Math.PI/2,Math.PI/2,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameLength]}/>
    {/* <boxGeometry args={[5, 5, 20]} /> */}
    <meshBasicMaterial>
    receiveShadow
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['#591E56', '#090060']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
      </meshBasicMaterial>
  </mesh>
  <mesh
      {...props}
      position={[0,gameInfo.gameWidth/2,-gameInfo.gameLength/2]}
      rotation={[Math.PI/2,0,0]}
      >
      <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameLength]}/>
      <meshBasicMaterial>
      receiveShadow
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['#271446', '#090060']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
      </meshBasicMaterial>
    </mesh>
    <mesh
    {...props}
    position={[0,-gameInfo.gameWidth/2,-gameInfo.gameLength/2]}
    rotation={[-Math.PI/2,0,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameLength]}/>
    <meshBasicMaterial>
      receiveShadow
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['#BE26CF', '#2F0C4E']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
      </meshBasicMaterial>
  </mesh>
  </mesh>
  )
}

export default Prism;