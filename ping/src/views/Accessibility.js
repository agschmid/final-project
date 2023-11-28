import React from 'react';
import './accessibility.css';
import { useStore } from '../state/useStore'
import Slider from './Slider';

const playingSelector = s => s.gamePlaying
const setOverlaySelector = s => s.setOverlay
const setVolumeSelector = s => s.setVolume
const volumeSelector = s => s.volume



//Component for a roll, its price, and options, as would be shown on the products page
function AccessibilityScreen(){
  const gamePlaying = useStore(playingSelector)
  const setOverlay = useStore(setOverlaySelector)
  const setVolume = useStore(setVolumeSelector)
  const volume = useStore(volumeSelector)

  return (
    <div id="accessibilityScreen">
      <button className='shortBox'>speed slider</button>
      <button className='shortBox'>size slider</button>
      <Slider setSliderVal={setVolume} sliderVal = {volume}></Slider>
      <button className='bigFont green' onClick={() => {gamePlaying ? setOverlay('paused') : setOverlay('home');}}>RETURN</button>
    </div>
  ) 
}

export default AccessibilityScreen