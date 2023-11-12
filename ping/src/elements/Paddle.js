import React from 'react'
import { useStore } from '../state/useStore'


function Paddle(props) {
    let paddle = useStore((s) => s.paddle)

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        {...props}
        ref={paddle}
        >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={'blue'} side = {'THREE.DoubleSide'} transparent= {true} opacity = {0.3} />
        </mesh>
    )
}

export default Paddle;