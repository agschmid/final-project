import {React, useEffect} from 'react';
import './views-css/play.css';
import { mobileCheck, useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const currentScoreSelector = s => s.currentScore
const highScoreSelector = s => s.highScore


// The overlay for the game while it is playing
function PlayScreen(){
  const setOverlay = useStore(setOverlaySelector)
  const currentScore = useStore(currentScoreSelector)
  const highScore = useStore(highScoreSelector)

  // Handle the escape key being pressed, taking to pause menu
  const escapePressed = (event) =>{
    if (event.key === 'Escape') {
      setOverlay('paused')
    }
  }

  // Event listener for the escape key
  useEffect(() => {
    document.addEventListener("keydown", escapePressed)
    return function cleanup() {
      document.removeEventListener("keydown", escapePressed)
    }
  })

  // Renders (escape) hint if on pc but not mobile using mobileCheck function
  return (
      <main id="playScreen">
        <h1 style={{display: "none"}}>PLAYING</h1>
        <button className='shortBox thinBox pauseMargin' onClick={() => setOverlay('paused')}>{mobileCheck() ? "PAUSE" :"PAUSE (ESC)"}</button>
        <span className='scoreDisplay blackPink squareNumbers'>{currentScore}{currentScore>=highScore+1 ? "!" : ''}</span> 
      </main>
  ) 
}

export default PlayScreen