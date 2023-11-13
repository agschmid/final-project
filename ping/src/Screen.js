import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useStore } from './state/useStore'
import "./style.css" 

import PlayScreen from './views/Play.js';
import CustomizeScreen from './views/Customize.js';
import AccessibilityScreen from './views/Accessibility.js';
import HomeScreen from './views/Home.js';
import PauseScreen from './views/Pause.js';
import ConfirmScreen from './views/Confirm.js';

import Ball from './elements/Ball.js';
import Paddle from './elements/Paddle.js';
import GameState from './GameState';


const playingSelector = s => s.gamePlaying
const overlaySelector = s => s.overlay


function Screen() {
    const overlay = useStore(overlaySelector)
    const gamePlaying = useStore(playingSelector)

    let canvasStyle = {
        position: "absolute",
        cursor: (overlay === 'playing') ? "none" : "pointer"
    }

    // TODO Replace switch?
    let screenOverlay
    switch(overlay) {
        case 'home':
            screenOverlay = <HomeScreen></HomeScreen>;
            break
        case 'playing':
            screenOverlay = <PlayScreen></PlayScreen>;
            break
        case 'paused':
            screenOverlay = <PauseScreen></PauseScreen>;
            break
        case 'accessibility':
            screenOverlay = <AccessibilityScreen></AccessibilityScreen>;
            break
        case 'customize':
            screenOverlay = <CustomizeScreen></CustomizeScreen>;
            break
        case 'confirm':
            screenOverlay = <ConfirmScreen></ConfirmScreen>;
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
            {/* TODO swap out this with something from GameState */}
            {(gamePlaying) && <> 
                <Ball position={[0, 0, 0]}></Ball>
                <Paddle position={[0,0,0]}></Paddle>
            </>}
            <GameState></GameState>
        </Canvas>
        <div id="menu">
            {screenOverlay}
        </div>
        </div>
    );
}

export default Screen;