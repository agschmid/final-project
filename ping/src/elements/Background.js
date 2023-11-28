import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'

function Background(props) {
    const texture = useLoader(TextureLoader, './textures/background.jpg')
    let gameInfo = useStore((s) => s.gameVariables)

    return (
        <mesh
        {...props}
        position={[0,0,-10*gameInfo.gameLength]}
        >
        <planeGeometry args={[gameInfo.gameLength*0.6865*10, 10*gameInfo.gameWidth]} />
        <meshStandardMaterial map={texture} side = {'THREE.DoubleSide'}/>
        </mesh>
    )
}

export default Background;