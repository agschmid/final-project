import React from 'react';
import './accessibility.css';

//Component for a roll, its price, and options, as would be shown on the products page
function AccessibilityScreen(props){
  return (
    <div id="accessibilityScreen">
      <button className='shortBox'>speed slider</button>
      <button className='shortBox'>size slider</button>
      <button className='shortBox bottomMargin'>sound tickbox/slider</button>
      <button className='bigFont green' onClick={() => {props.playingState ? props.setGame('paused') : props.setGame('home');}}>RETURN</button>
    </div>
  ) 
}

export default AccessibilityScreen