import React from 'react';
import './pause.css';

//Component for a roll, its price, and options, as would be shown on the products page
function PauseScreen(props){
    return (
       <div id="pauseScreen">
        <button className='shortBox thinBox red bottomMargin' onClick={() => props.setGame('confirm')}>EXIT GAME</button>
        <button className='shortBox colorful' onClick={() => props.setGame('customize')}>customize visuals</button>
        <button className='bottomMargin' onClick={() => props.setGame('accessibility')}>accessibility & <br></br> controls</button>
        <button className='bigFont green' onClick={() => props.setGame('playing')}>RESUME</button>
       </div>
    ) 
}

export default PauseScreen