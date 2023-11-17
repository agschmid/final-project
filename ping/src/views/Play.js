import {React, useEffect} from 'react';
import './play.css';
import { mobileCheck, useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay

//Component for a roll, its price, and options, as would be shown on the products page
function PlayScreen(){
  const setOverlay = useStore(setOverlaySelector)

  const escapePressed = (event) =>{
    if (event.key === 'Escape') {
      setOverlay('paused')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escapePressed)
    return function cleanup() {
      document.removeEventListener("keydown", escapePressed)
    }
  })

  return (
      <div id="playScreen">
      <button className='shortBox thinBox pauseMargin' onClick={() => setOverlay('paused')}>{mobileCheck() ? "PAUSE" :"PAUSE (ESC)"}</button>
      </div>
  ) 
}

export default PlayScreen