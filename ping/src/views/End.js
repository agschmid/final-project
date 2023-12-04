import React from 'react';
import { useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const setGamePlayingSelector = s => s.setGamePlaying
const currentScoreSelector = s => s.currentScore
const setCurrentScoreSelector = s => s.setCurrentScore
const highScoreSelector = s => s.highScore

// The endscreen of the game, when someone loses. 
function EndScreen(){
    const setOverlay = useStore(setOverlaySelector)
    const setGamePlaying = useStore(setGamePlayingSelector)
    const currentScore = useStore(currentScoreSelector)
    const setCurrentScore = useStore(setCurrentScoreSelector)
    const highScore = useStore(highScoreSelector)

    return (
       <main id="endScreen" className='centeredScreen'>
        <h1 className='blackPink'>GAME OVER!</h1>
        <span className='blackPink extraPadding'>SCORE: {currentScore}</span>
        <span className='bottomMargin blackPink extraPadding'>HIGHSCORE: {highScore}</span>
        <button className='shortBox thinBox red bottomMargin' onClick={function (){setCurrentScore(0); setOverlay('home')}}>EXIT GAME</button>
        <button className='bigFont green' onClick={function (){setOverlay('countdown');setGamePlaying(true);setCurrentScore(0);}}>PLAY AGAIN</button>
       </main>
    ) 
}

export default EndScreen