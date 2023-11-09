import React from 'react';
import './customize.css';

//Component for a roll, its price, and options, as would be shown on the products page
function CustomizeScreen(props){
  return (
    <div id="customizeScreen">
      <button className='shortBox colorful'>character</button>
      <button className='shortBox colorful bottomMargin'>color</button>
      <button className='bigFont green' onClick={() => {props.playingState ? props.setGame('paused') : props.setGame('home');}}>RETURN</button>
    </div>
  ) 
}

export default CustomizeScreen