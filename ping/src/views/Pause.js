import React from 'react';
import './views-css/pause.css';
import { useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const musicPlayingSelector = s => s.musicPlaying
const setMusicPlayingSelector = s => s.setMusicPlaying

//Component for a roll, its price, and options, as would be shown on the products page
function PauseScreen(props){
    const setOverlay = useStore(setOverlaySelector)
    const musicPlaying = useStore(musicPlayingSelector)
    const setMusicPlaying = useStore(setMusicPlayingSelector)

    return (
       <div id="pauseScreen">
        <button className='shortBox thinBox red bottomMargin' onClick={() => setOverlay('confirm')}>EXIT GAME</button>
        {/* <button className='shortBox colorful' onClick={() => setOverlay('customize')}>customize visuals</button> */}
        <button className='shortBox colorful' onClick={function() {props.toggleSound(); setMusicPlaying(!musicPlaying)}}>{musicPlaying ? 'pause music' : 'play music'} </button>
        <button className='bottomMargin' onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
        <button className='bigFont green' onClick={() => setOverlay('countdown')}>RESUME</button>
       </div>
    ) 
}

export default PauseScreen