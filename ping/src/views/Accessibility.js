import React from 'react';
import './accessibility.css';
import { useStore } from '../state/useStore'

const playingSelector = s => s.gamePlaying
const setOverlaySelector = s => s.setOverlay


//Component for a roll, its price, and options, as would be shown on the products page
function AccessibilityScreen(){
  const gamePlaying = useStore(playingSelector)
  const setOverlay = useStore(setOverlaySelector)

  return (
    <div id="accessibilityScreen">
      <button className='shortBox'>speed slider</button>
      <button className='shortBox'>size slider</button>
      <button className='shortBox bottomMargin'>sound tickbox/slider</button>
      <button className='bigFont green' onClick={() => {gamePlaying ? setOverlay('paused') : setOverlay('home');}}>RETURN</button>
    </div>
  ) 
}

export default AccessibilityScreen