import React from 'react';
import './views-css/home.css';
import { useStore } from '../state/useStore'

const setGamePlayingSelector = s => s.setGamePlaying
const setOverlaySelector = s => s.setOverlay

const highScoreSelector = s => s.highScore
const musicPlayingSelector = s => s.musicPlaying
const setMusicPlayingSelector = s => s.setMusicPlaying



//Component for a roll, its price, and options, as would be shown on the products page
function HomeScreen(props){
  const setGamePlaying = useStore(setGamePlayingSelector)
  const setOverlay = useStore(setOverlaySelector)
  const highScore = useStore(highScoreSelector)
  const musicPlaying = useStore(musicPlayingSelector)
  const setMusicPlaying = useStore(setMusicPlayingSelector)

  
  return (
      <div id="homeScreen">
      <span className='bottomMargin' style={{color: 'white'}}>HIGHSCORE: {highScore}</span>
      {/* <button className='shortBox colorful' onClick={() => setOverlay('customize')}>customize visuals</button> */}
      <button className='shortBox colorful' onClick={function() {props.toggleSound(); setMusicPlaying(!musicPlaying)}}>{musicPlaying ? 'pause music' : 'play music'} </button>
      <button onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
      <button className='bottomMargin' onClick={() => setOverlay('tutorial')}>how to play</button>
      <button className='bigFont green' onClick={highScore===0 ?  function(){setOverlay('tutorial');} : function(){setOverlay('countdown'); setGamePlaying(true);}}>PLAY GAME</button>
      </div>
  ) 
}

export default HomeScreen