import React from 'react';
import { useStore } from '../state/useStore'

const setGamePlayingSelector = s => s.setGamePlaying
const setOverlaySelector = s => s.setOverlay
const highScoreSelector = s => s.highScore
const musicPlayingSelector = s => s.musicPlaying
const setMusicPlayingSelector = s => s.setMusicPlaying

//The homescreen of the game – the first thing a player sees
function HomeScreen(props){
  const setGamePlaying = useStore(setGamePlayingSelector)
  const setOverlay = useStore(setOverlaySelector)
  const highScore = useStore(highScoreSelector)
  const musicPlaying = useStore(musicPlayingSelector)
  const setMusicPlaying = useStore(setMusicPlayingSelector)

  
  return (
      <main id="homeScreen" className='centeredScreen'>
      <span className='bottomMargin' style={{color: 'white'}}>HIGHSCORE: {highScore}</span>
      <button className='shortBox colorful' onClick={function() {props.toggleSound(); setMusicPlaying(!musicPlaying)}}>{musicPlaying ? 'pause music' : 'play music'} </button>
      <button onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
      <button className='bottomMargin' onClick={() => setOverlay('tutorial')}>how to play</button>
      <button className='bigFont green' onClick={highScore===0 ?  function(){setOverlay('tutorial');} : function(){setOverlay('countdown'); setGamePlaying(true);}}>PLAY GAME</button>
      </main>
  ) 
}

export default HomeScreen