import React from 'react';
import './home.css';
import { useStore } from '../state/useStore'

const setGamePlayingSelector = s => s.setGamePlaying
const setOverlaySelector = s => s.setOverlay


//Component for a roll, its price, and options, as would be shown on the products page
function HomeScreen(){
  const setGamePlaying = useStore(setGamePlayingSelector)
  const setOverlay = useStore(setOverlaySelector)

  return (
      <div id="homeScreen">
      <button className='shortBox colorful' onClick={() => setOverlay('customize')}>customize visuals</button>
      <button className='bottomMargin' onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
      <button className='bigFont green' onClick={function(){setOverlay('playing'); setGamePlaying(true);}}>PLAY GAME</button>
      </div>
  ) 
}

export default HomeScreen