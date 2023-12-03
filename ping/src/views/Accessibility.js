import React from 'react';
import './views-css/accessibility.css';
import { useStore } from '../state/useStore'
import Slider from './Slider';

const playingSelector = s => s.gamePlaying
const setOverlaySelector = s => s.setOverlay
const storedOptionsSelector = s => s.storedOptions



//Component for a roll, its price, and options, as would be shown on the products page
function AccessibilityScreen(){
  const gamePlaying = useStore(playingSelector)
  const setOverlay = useStore(setOverlaySelector)
  const storedOptions = useStore(storedOptionsSelector)

  return (
    <div id="accessibilityScreen">
      <Slider setSliderVal={'speed'} title={'Speed increase'} description={'How much the speed increases each time the ball is hit. Default: 0.5'} sliderVal = {storedOptions.speed} min = {0} max = {2} step = {0.5}></Slider>
      <Slider setSliderVal={'paddle'} title={'Paddle size'} description={'Size of your paddle. Default: 1'} sliderVal = {storedOptions.paddleWidth} min = {0.5} max = {3} step = {0.5}></Slider>
      <Slider setSliderVal={'volume'} title={'Music volume'} description={'Volume of the game sounds. Default: 60'} sliderVal = {storedOptions.volume} min = {0} max = {100} step = {10}></Slider>
      <button className='bigFont green' onClick={() => {gamePlaying ? setOverlay('paused') : setOverlay('home');}}>RETURN</button>
    </div>
  ) 
}

export default AccessibilityScreen