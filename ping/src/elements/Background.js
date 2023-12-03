import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


// The background image as a 3D element
// https://www.artapixel.com/31-synthwave-sun-waves-electronic-sky.html
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