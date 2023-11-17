import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


function Paddle(props) {
    const texture = useLoader(TextureLoader, './textures/paddle.png')

    let paddle = useStore((s) => s.paddle)
    let paddleBrightness = useStore((s)=> s.paddleBrightness)
    let gameInfo = useStore((s) => s.gameVariables)

    return (
        <mesh
        {...props}
        ref={paddle}
        >
        <planeGeometry args={[gameInfo.paddleWidth, gameInfo.paddleWidth]} />
        <meshStandardMaterial map={texture} side = {'THREE.DoubleSide'} transparent= {true} emissive = {0xffffff} emissiveIntensity = {paddleBrightness}/>
        </mesh>
    )
}

export default Paddle;