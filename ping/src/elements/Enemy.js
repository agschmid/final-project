import React from 'react'
import {useLoader} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useStore } from '../state/useStore'


function Enemy(props) {
    const texture = useLoader(TextureLoader, './textures/enemy.png')

    let enemy = useStore((s) => s.enemy)
    // let enemyBrightness = useStore((s)=> s.enemyBrightness) TODO
    let gameInfo = useStore((s) => s.gameVariables)


    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
        {...props}
        ref={enemy}
        position = {[0,0,-gameInfo.gameLength]}
        >
        <planeGeometry args={[gameInfo.enemyWidth, gameInfo.enemyWidth]} />
        <meshStandardMaterial map={texture} side = {'THREE.DoubleSide'} transparent= {true} emissive = {0xff0000} emissiveIntensity = {1}/>
        </mesh>
    )
}

export default Enemy;