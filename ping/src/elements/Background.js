import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Background(props) {
    const texture = useLoader(TextureLoader, './textures/background.jpg')

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        {...props}
        position={[0,0,-10]}
        >
        <planeGeometry args={[13.73/2, 5]} />
        <meshStandardMaterial map={texture} side = {'THREE.DoubleSide'}/>
        </mesh>
    )
}

export default Background;