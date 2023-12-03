import React from 'react';
import { useStore } from '../state/useStore'

const setGamePlayingSelector = s => s.setGamePlaying
const setOverlaySelector = s => s.setOverlay
const setCurrentScoreSelector = s => s.setCurrentScore
const setSpeedMultiplierSelector = s => s.setSpeedMultiplier


//Confirmation screen, that confirm if the user wants to exit a paused game
function ConfirmScreen(){
    const setGamePlaying = useStore(setGamePlayingSelector)
    const setOverlay = useStore(setOverlaySelector)
    const setCurrentScore = useStore(setCurrentScoreSelector)
    const setSpeedMultiplier = useStore(setSpeedMultiplierSelector)

    return (
       <main id="confirmScreen" className='centeredScreen vhs'>
        <span className='confirmText highScore extraPadding'>confirm you want to exit?</span>
        <button className='shortBox thinBox red bottomMargin' onClick={function(){setOverlay('home'); setGamePlaying(false); setCurrentScore(0); setSpeedMultiplier(5)}}>YES</button>
        <button className='shortBox thinBox' onClick={() => setOverlay('paused')}>NO</button>
       </main>
    ) 
}

export default ConfirmScreen