import {React, useEffect} from 'react';
import './play.css';
import { mobileCheck, useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const currentScoreSelector = s => s.currentScore

function PlayScreen(){
  const setOverlay = useStore(setOverlaySelector)

  const currentScore = useStore(currentScoreSelector)
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
        <span className='scoreDisplay'>{currentScore}</span>
      </div>
  ) 
}

export default PlayScreen