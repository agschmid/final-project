import React from 'react';
import './views-css/end.css';
import { useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const setGamePlayingSelector = s => s.setGamePlaying

const currentScoreSelector = s => s.currentScore
const setCurrentScoreSelector = s => s.setCurrentScore

const highScoreSelector = s => s.highScore

//Component for a roll, its price, and options, as would be shown on the products page
function EndScreen(){
    const setOverlay = useStore(setOverlaySelector)
    const setGamePlaying = useStore(setGamePlayingSelector)
    const currentScore = useStore(currentScoreSelector)
    const setCurrentScore = useStore(setCurrentScoreSelector)
    const highScore = useStore(highScoreSelector)

    return (
       <div id="endScreen">
        <span >SCORE: {currentScore}</span>
        <span className='bottomMargin'>HIGHSCORE: {highScore}</span>
        <button className='shortBox thinBox red bottomMargin' onClick={function (){setCurrentScore(0); setOverlay('home')}}>EXIT GAME</button>
        <button className='bigFont green' onClick={function (){setOverlay('countdown');setGamePlaying(true);setCurrentScore(0);}}>PLAY AGAIN</button>
       </div>
    ) 
}

export default EndScreen