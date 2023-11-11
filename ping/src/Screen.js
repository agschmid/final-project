import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Ball from './elements/Ball.js';
import "./style.css" 

import PlayScreen from './views/Play.js';
import CustomizeScreen from './views/Customize.js';
import AccessibilityScreen from './views/Accessibility.js';
import HomeScreen from './views/Home.js';
import PauseScreen from './views/Pause.js';
import ConfirmScreen from './views/Confirm.js';


function Screen() {
    const [gameState, setGameState] = useState('home');
    const [playingState, setPlayingState] = useState(false);

    let canvasStyle = {
        position: "absolute",
    }

    let screenOverlay
    switch(gameState) {
        case 'home':
            screenOverlay = <HomeScreen setGame = {setGameState} setPlay = {setPlayingState}></HomeScreen>;
            break
        case 'playing':
            screenOverlay = <PlayScreen setGame = {setGameState}></PlayScreen>;
            break
        case 'paused':
            screenOverlay = <PauseScreen setGame = {setGameState}></PauseScreen>;
            break
        case 'accessibility':
            screenOverlay = <AccessibilityScreen setGame = {setGameState} playingState = {playingState}></AccessibilityScreen>;
            break
        case 'customize':
            screenOverlay = <CustomizeScreen setGame = {setGameState} playingState = {playingState}></CustomizeScreen>;
            break
        case 'confirm':
            screenOverlay = <ConfirmScreen setGame = {setGameState} setPlay = {setPlayingState}></ConfirmScreen>;
            break
        default:
            screenOverlay = <div>A screen overlay has been request that doesn't exist... oops</div>;
            break
    }

    return (
        <div id="parentContainer">
        <Canvas style={canvasStyle}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Ball position={[0, 0, 0]} />
        </Canvas>
        <div id="menu">
            {screenOverlay}
        </div>
        </div>
    );
}

export default Screen;