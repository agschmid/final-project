import React from 'react'
import { useStore } from '../state/useStore'
import {GradientTexture} from '@react-three/drei'
import GlowLine from './GlowLine'


// The game area and it's surroundings
function Prism(props) {
  let prism = useStore((s) => s.prism)
  let gameInfo = useStore((s) => s.gameVariables)


  // Loop to generate all the static glowing lines in the game
  const generateStaticLines = ()=>{
    let staticGlowLines = []
    for (let i=0; i<6; i++){
      for (let j of [-1, 1]){
        staticGlowLines.push(<GlowLine key={`1${i}${j}`} position={[j*(gameInfo.gameWidth/2+2.5),-2.5+i,0]} rotation = {[0,0,0]} length={gameInfo.gameWidth}></GlowLine>)
        staticGlowLines.push(<GlowLine key={`2${i}${j}`} position={[j*(i+gameInfo.gameWidth/2),0,0]} rotation = {[0,0,Math.PI/2]} length={gameInfo.gameWidth*3}></GlowLine>)
        
        staticGlowLines.push(<GlowLine key={`5${i}${j}`} position={[0,j*(i+gameInfo.gameWidth/2),0]} rotation = {[0,0,0]} length={gameInfo.gameWidth*3}></GlowLine>)
        staticGlowLines.push(<GlowLine key={`6${i}${j}`} position={[-2.5+i, j*(gameInfo.gameWidth/2+2.5),0]} rotation = {[0,0,Math.PI/2]} length={gameInfo.gameWidth}></GlowLine>)
                
        
        staticGlowLines.push(<GlowLine key={`3${i}${j}`} position={[j*(gameInfo.gameWidth/2-0.01),-2.5+i,-gameInfo.gameLength/2]} rotation = {[0,-j*Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>)
        staticGlowLines.push(<GlowLine key={`4${i}${j}`} position={[-2.5+i,j*(gameInfo.gameWidth/2-0.01),-gameInfo.gameLength/2]} rotation = {[j*Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>)
      }
    }
    return staticGlowLines
  }


  // This begins by rendering each flat plain with a gradient.
  // It then call sthe generate static lines function to add all the lines. 
  // TODO would be great to turn the flat plains into a function
  return (
    <>
    <mesh ref={prism}>
    <mesh
      {...props}
      position={[gameInfo.gameWidth/2,0,-gameInfo.gameLength/2]}
      rotation={[Math.PI/2,-Math.PI/2,0]}
      >
      <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameLength]}/>
      <meshBasicMaterial>
        <GradientTexture
          stops={[1,0]} 
          colors={['#591E56', '#090060']} 
          size={1024} 
         />
      </meshBasicMaterial>
    </mesh>
    <mesh
    {...props}
    position={[-gameInfo.gameWidth/2,0,-gameInfo.gameLength/2]}
    rotation={[-Math.PI/2,Math.PI/2,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth, gameInfo.gameLength]}/>
    <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} 
          colors={['#591E56', '#090060']} 
          size={1024} 
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
        <GradientTexture
          stops={[0, 1]} 
          colors={['#271446', '#81198c']} 
          size={1024} 
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
        <GradientTexture
          stops={[0, 1]} 
          colors={['#BE26CF', '#2F0C4E']} 
          size={1024} 
         />
      </meshBasicMaterial>
    </mesh>

  <mesh
    {...props}
    position={[0,gameInfo.gameWidth/2+2.5,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth+10, 5]}/>
    <meshStandardMaterial color={'#81198c'} />

  </mesh>
  <mesh
    {...props}
    position={[0,-gameInfo.gameWidth/2-2.5,0]}
    >
    <planeGeometry args={[gameInfo.gameWidth+10, 5]}/>
    <meshStandardMaterial color={'#81198c'} />
  </mesh>
  <mesh
    {...props}
    position={[gameInfo.gameWidth/2+2.5,0,0]}
    rotation={[0,0,Math.PI/2]}
    >
    <planeGeometry args={[gameInfo.gameWidth, 5]}/>
    <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} 
          colors={['#81198c', '#2F0C4E']} 
          size={1024} 
         />
      </meshBasicMaterial>
  </mesh>
  <mesh
    {...props}
    position={[-gameInfo.gameWidth/2-2.5,0,0]}
    rotation={[0,0,Math.PI/2]}
    >
    <planeGeometry args={[gameInfo.gameWidth, 5]}/>
    <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} 
          colors={['#2F0C4E', '#81198c']} 
          size={1024} 
         />
      </meshBasicMaterial>
  </mesh>
  </mesh>

  {generateStaticLines()}
  </>
  )
}

export default Prism;