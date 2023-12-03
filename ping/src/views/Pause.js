import React from 'react';
import { useStore } from '../state/useStore'


const setOverlaySelector = s => s.setOverlay
const musicPlayingSelector = s => s.musicPlaying
const setMusicPlayingSelector = s => s.setMusicPlaying

//Pause screen for the game
function PauseScreen(props){
    const setOverlay = useStore(setOverlaySelector)
    const musicPlaying = useStore(musicPlayingSelector)
    const setMusicPlaying = useStore(setMusicPlayingSelector)

    return (
       <main id="pauseScreen" className='centeredScreen vhs'>
        <button className='shortBox thinBox red bottomMargin' onClick={() => setOverlay('confirm')}>EXIT GAME</button>
        <button className='shortBox colorful' onClick={function() {props.toggleSound(); setMusicPlaying(!musicPlaying)}}>
            {musicPlaying ? <img src = "./textures/pause.svg" alt="musicNote" height='14' className='rightMargin'/> : <img src = "./textures/play.svg" alt="musicNote" height='14' className='rightMargin'/>}
            {musicPlaying ? 'pause music' : 'play music'} 
        </button>
        <button className='bottomMargin' onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
        <button className='bigFont green' onClick={() => setOverlay('countdown')}>RESUME</button>
       </main>
    ) 
}

export default PauseScreen