import React from 'react';
import './customize.css';
import { useStore } from '../state/useStore'

const playingSelector = s => s.gamePlaying
const setOverlaySelector = s => s.setOverlay


//Component for a roll, its price, and options, as would be shown on the products page
function CustomizeScreen(){
  const gamePlaying = useStore(playingSelector)
  const setOverlay = useStore(setOverlaySelector)

  return (
    <div id="customizeScreen">
      <button className='shortBox colorful'>character</button>
      <button className='shortBox colorful bottomMargin'>color</button>
      <button className='bigFont green' onClick={() => {gamePlaying ? setOverlay('paused') : setOverlay('home');}}>RETURN</button>
    </div>
  ) 
}

export default CustomizeScreen