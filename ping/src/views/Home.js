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
      <img src = "./textures/title.svg" alt="PING written in bold colors, with an 80s aesthetic" width='300px;' className='bottomMargin'/>
      <button className='shortBox' onClick={() => setOverlay('tutorial')}>how to play ?</button>
      <button className='shortBox' onClick={() => setOverlay('accessibility')}>accessibility</button>
      <button className='shortBox colorful bottomMargin' onClick={function() {props.toggleSound(); setMusicPlaying(!musicPlaying)}}>
        {musicPlaying ? <img src = "./textures/pause.svg" alt="musicNote" height='14' className='rightMargin'/> : <img src = "./textures/play.svg" alt="musicNote" height='14' className='rightMargin'/>}
        {musicPlaying ? 'pause music' : 'play music'} 
      </button>
      <span className='highScore extraPadding'>HIGHSCORE: {highScore}</span>
      <button className='bigFont green' onClick={highScore===0 ?  function(){setOverlay('tutorial');} : function(){setOverlay('countdown'); setGamePlaying(true);}}>PLAY GAME</button>
      </main>
  ) 
}

export default HomeScreen