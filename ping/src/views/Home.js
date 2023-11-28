import React from 'react';
import './home.css';
import { useStore } from '../state/useStore'

const setGamePlayingSelector = s => s.setGamePlaying
const setOverlaySelector = s => s.setOverlay

const highScoreSelector = s => s.highScore



//Component for a roll, its price, and options, as would be shown on the products page
function HomeScreen(props){
  const setGamePlaying = useStore(setGamePlayingSelector)
  const setOverlay = useStore(setOverlaySelector)
  const highScore = useStore(highScoreSelector)


  return (
      <div id="homeScreen">
      <span className='bottomMargin' style={{color: 'white'}}>HIGHSCORE: {highScore}</span>
      <button className='shortBox colorful' onClick={() => setOverlay('customize')}>customize visuals</button>
      <button className='bottomMargin' onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
      <button className='bigFont green' onClick={function(){setOverlay('countdown'); setGamePlaying(true); props.playSound();}}>PLAY GAME</button>
      </div>
  ) 
}

export default HomeScreen