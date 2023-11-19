import {React, useEffect} from 'react';
import './play.css';
import { mobileCheck, useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const currentScoreSelector = s => s.currentScore
const highScoreSelector = s => s.highScore

function PlayScreen(){
  const setOverlay = useStore(setOverlaySelector)

  const currentScore = useStore(currentScoreSelector)
  const highScore = useStore(highScoreSelector)

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
        <span className='scoreDisplay'>{currentScore===highScore+1 ? "NEW HIGH! " : ''} {currentScore}</span> 
        {/* TODO Check if people like new high always being there? */}
      </div>
  ) 
}

export default PlayScreen