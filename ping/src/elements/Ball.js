import React, { useRef, useState } from 'react'
import { useFrame} from '@react-three/fiber'

function Ball(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // Hold state for hovered and clicked events
  // const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)
  const [ballDirection, setBallDirection] = useState(1)
  const [ballSpeed, setBallSpeed] = useState(5)


  // Subscribe this component to the render-loop, rotate the mesh every frame


  useFrame( (state, delta) => {
    if (ref.current.position.z>=0){
      setBallDirection(-1)
    }
    else if (ref.current.position.z<=-10){
      setBallDirection(1)
    }
    (ref.current.position.z += ballSpeed*ballDirection*delta)
  })

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
      >
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default Ball;