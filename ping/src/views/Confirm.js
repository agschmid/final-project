import React from 'react';
import './confirm.css';
import { useStore } from '../state/useStore'

const setGamePlayingSelector = s => s.setGamePlaying
const setOverlaySelector = s => s.setOverlay


//Component for a roll, its price, and options, as would be shown on the products page
function ConfirmScreen(){
    const setGamePlaying = useStore(setGamePlayingSelector)
    const setOverlay = useStore(setOverlaySelector)

    return (
       <div id="confirmScreen">
        <span>confirm you want to exit?</span>
        <button className='shortBox thinBox red bottomMargin' onClick={function(){setOverlay('home'); setGamePlaying(false);}}>YES</button>
        <button className='shortBox thinBox' onClick={() => setOverlay('paused')}>NO</button>
       </div>
    ) 
}

export default ConfirmScreen