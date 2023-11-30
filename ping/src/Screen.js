import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer} from '@react-three/postprocessing'
import {Howl} from 'howler';

import { useStore } from './state/useStore'
import "./style.css" 

import PlayScreen from './views/Play.js';
import CustomizeScreen from './views/Customize.js';
import AccessibilityScreen from './views/Accessibility.js';
import HomeScreen from './views/Home.js';
import CountdownScreen from './views/Countdown';
import PauseScreen from './views/Pause.js';
import ConfirmScreen from './views/Confirm.js';
import TutorialScreen from './views/Tutorial.js';


import Background from './elements/Background.js';
import Ball from './elements/Ball.js';
import Paddle from './elements/Paddle.js';
import Enemy from './elements/Enemy.js';
import Prism from './elements/Prism.js';
import GameState from './GameState';
import GlowGrid from './elements/GlowGrid';
import EndScreen from './views/End';




var song = new Howl({
    preload:true,
    src: ['song.wav'],
    loop:true
});


var opener = new Howl({
    preload:true,
    src: ['opener.wav'],
    onend: function(){
        song.play()
    }
});

const playingSelector = s => s.gamePlaying
const overlaySelector = s => s.overlay
const cursorStyleSelector = s => s.cursorStyle

const setStoredOptionsSelector  = s => s.setStoredOptions
const storedOptionsSelector  = s => s.storedOptions

function playMusic(){
    if (!song.playing()) opener.play()
}

function Screen() {
    const overlay = useStore(overlaySelector)
    const gamePlaying = useStore(playingSelector)
    const cursorStyle = useStore(cursorStyleSelector)
    const storedOptions = useStore(storedOptionsSelector)
    const setStoredOptions = useStore(setStoredOptionsSelector)


    const volume = storedOptions.volume




    song.volume(volume/200)
    opener.volume(volume/200)
    
    let canvasStyle = {
        position: "absolute",
        cursor: cursorStyle
    }

    let screenOverlay
    switch(overlay) {
        case 'home':
            screenOverlay = <HomeScreen playSound = {playMusic} ></HomeScreen>;
            break
        case 'countdown':
            screenOverlay = <CountdownScreen></CountdownScreen>;
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
        case 'end':
            screenOverlay = <EndScreen></EndScreen>;
            break
        case 'confirm':
            screenOverlay = <ConfirmScreen></ConfirmScreen>;
            break
        case 'tutorial':
            screenOverlay = <TutorialScreen playSound = {playMusic}></TutorialScreen>;
            break
        default:
            screenOverlay = <div>A screen overlay has been request that doesn't exist... oops</div>;
            break
    }


    return (
        <>
        <Canvas camera={{ fov: 80, position: [0,0,3]}} style={canvasStyle} >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0.5, 0.5, 4]} />
            <directionalLight position={[-0.5, 0.5, 1]} />
            {(gamePlaying) && <> 
                <Ball position={[0, 0, -0.5]}></Ball>
                <Paddle position={[0,0,0]}></Paddle>
                <Enemy></Enemy>

            </>}
            <Prism ></Prism>
            <GlowGrid></GlowGrid>
            <Background></Background>
            <GameState></GameState>
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1} />
            </EffectComposer>
            
        </Canvas>
        <div id="menu">
            {screenOverlay}
        </div>
        </>
    );
}

export default Screen;