import React from 'react';
import './play.css';

//Component for a roll, its price, and options, as would be shown on the products page
function PlayScreen(props){
  return (
      <div id="playScreen">
      <button className='shortBox thinBox pauseMargin' onClick={() => props.setGame('paused')}>PAUSE</button>
      </div>
  ) 
}

export default PlayScreen