import React from 'react';
import './pause.css';
import { useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay

//Component for a roll, its price, and options, as would be shown on the products page
function PauseScreen(){
    const setOverlay = useStore(setOverlaySelector)

    return (
       <div id="pauseScreen">
        <button className='shortBox thinBox red bottomMargin' onClick={() => setOverlay('confirm')}>EXIT GAME</button>
        <button className='shortBox colorful' onClick={() => setOverlay('customize')}>customize visuals</button>
        <button className='bottomMargin' onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
        <button className='bigFont green' onClick={() => setOverlay('countdown')}>RESUME</button>
       </div>
    ) 
}

export default PauseScreen