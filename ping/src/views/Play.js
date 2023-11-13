import React from 'react';
import './play.css';
import { useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay

//Component for a roll, its price, and options, as would be shown on the products page
function PlayScreen(){
  const setOverlay = useStore(setOverlaySelector)

  return (
      <div id="playScreen">
      <button className='shortBox thinBox pauseMargin' onClick={() => setOverlay('paused')}>PAUSE</button>
      </div>
  ) 
}

export default PlayScreen