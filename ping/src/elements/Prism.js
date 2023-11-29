import React from 'react'
import { useStore } from '../state/useStore'
import {GradientTexture} from '@react-three/drei'
import GlowLine from './GlowLine'

function Prism(props) {
  let prism = useStore((s) => s.prism)
  let gameInfo = useStore((s) => s.gameVariables)

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
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['#271446', '#81198c']} // Colors need to match the number of stops
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
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['#BE26CF', '#2F0C4E']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
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
          stops={[0, 1]} // As many stops as you want
          colors={['#81198c', '#2F0C4E']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
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
          stops={[0, 1]} // As many stops as you want
          colors={['#2F0C4E', '#81198c']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         />
      </meshBasicMaterial>
  </mesh>
  </mesh>

  {generateStaticLines()}


  {/* TODO do this with a loop and do the whole area properly*/}
  {/* <GlowLine position={[-gameInfo.gameWidth/2-2.5,-1,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2-2.5,-2,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2-2.5, 0,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2-2.5, 1,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2-2.5,2,0]} rotation = {[0,0,0]} length={5}></GlowLine>

  <GlowLine position={[gameInfo.gameWidth/2+2.5,-1,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2+2.5,-2,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2+2.5, 0,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2+2.5, 1,0]} rotation = {[0,0,0]} length={5}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2+2.5,2,0]} rotation = {[0,0,0]} length={5}></GlowLine>


  <GlowLine position={[0+gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[1+gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[2+gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[3+gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[4+gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>

  <GlowLine position={[-gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[-1-gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[-2-gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[-3-gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine>
  <GlowLine position={[-4-gameInfo.gameWidth/2,0,0]} rotation = {[0,0,Math.PI/2]} length={5}></GlowLine> */}


  {/* <GlowLine position={[-gameInfo.gameWidth/2,0,-gameInfo.gameLength/2]} rotation = {[0,Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2,-1,-gameInfo.gameLength/2]} rotation = {[0,Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2,-2,-gameInfo.gameLength/2]} rotation = {[0,Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2,1,-gameInfo.gameLength/2]} rotation = {[0,Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-gameInfo.gameWidth/2,2,-gameInfo.gameLength/2]} rotation = {[0,Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>

  <GlowLine position={[gameInfo.gameWidth/2,0,-gameInfo.gameLength/2]} rotation = {[0,-Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2,-1,-gameInfo.gameLength/2]} rotation = {[0,-Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2,-2,-gameInfo.gameLength/2]} rotation = {[0,-Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2,1,-gameInfo.gameLength/2]} rotation = {[0,-Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[gameInfo.gameWidth/2,2,-gameInfo.gameLength/2]} rotation = {[0,-Math.PI/2,0]} length={gameInfo.gameLength} glow={1}></GlowLine> */}

  {/* <GlowLine position={[0,gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[1,gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[2,gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-1,gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-2,gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>

  <GlowLine position={[0,-gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[-Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[1,-gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[-Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[2,-gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[-Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-1,-gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[-Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
  <GlowLine position={[-2,-gameInfo.gameWidth/2,-gameInfo.gameLength/2]} rotation = {[-Math.PI/2,0,Math.PI/2]} length={gameInfo.gameLength} glow={1}></GlowLine>
 */}

  </>
  )
}

export default Prism;