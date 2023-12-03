import React from 'react';
import { useStore } from '../state/useStore'
import Slider from './Slider';

const playingSelector = s => s.gamePlaying
const setOverlaySelector = s => s.setOverlay
const storedOptionsSelector = s => s.storedOptions


// The accessibility screen, affecting music and speed/size settings
function AccessibilityScreen(){
  const gamePlaying = useStore(playingSelector)
  const setOverlay = useStore(setOverlaySelector)
  const storedOptions = useStore(storedOptionsSelector)

  return (
    <main id="accessibilityScreen" className='centeredScreen'>
      <Slider style={{ whiteSpace: 'pre-wrap' }} setSliderVal={'speed'} title={'Speed increase'} description={'How much the speed increases each time the ball is hit. \rDefault: 0.5'} sliderVal = {storedOptions.speed} min = {0} max = {2} step = {0.5}></Slider>
      <Slider setSliderVal={'paddle'} title={'Paddle size'} description={'The size of your paddle. \rDefault: 1'} sliderVal = {storedOptions.paddleWidth} min = {0.5} max = {3} step = {0.5}></Slider>
      <Slider setSliderVal={'volume'} title={'Music volume'} description={'Volume of the game sounds. \rDefault: 60'} sliderVal = {storedOptions.volume} min = {0} max = {100} step = {10}></Slider>
      <button className='bigFont green' onClick={() => {gamePlaying ? setOverlay('paused') : setOverlay('home');}}>RETURN</button>
    </main>
  ) 
}

export default AccessibilityScreen