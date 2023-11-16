import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


function Paddle(props) {
    const texture = useLoader(TextureLoader, './textures/paddle.png')

    let paddle = useStore((s) => s.paddle)
    let paddleBrightness = useStore((s)=> s.paddleBrightness)

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        {...props}
        ref={paddle}
        >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial map={texture} side = {'THREE.DoubleSide'} transparent= {true} emissive = {0xffffff} emissiveIntensity = {paddleBrightness}/>
        </mesh>
    )
}

export default Paddle;