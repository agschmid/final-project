import React from 'react';
import './confirm.css';

//Component for a roll, its price, and options, as would be shown on the products page
function ConfirmScreen(props){
    return (
       <div id="confirmScreen">
        <span>confirm you want to exit?</span>
        <button className='shortBox thinBox red bottomMargin' onClick={function(){props.setGame('home'); props.setPlay(false)}}>YES</button>
        <button className='shortBox thinBox' onClick={() => props.setGame('paused')}>NO</button>
       </div>
    ) 
}

export default ConfirmScreen