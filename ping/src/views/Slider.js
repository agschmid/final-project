import React from 'react';
import { useStore } from '../state/useStore'

import './slider.css';

// import { useStore } from '../state/useStore'
const setStoredOptionsSelector = s => s.setStoredOptions
const storedOptionsSelector = s => s.storedOptions

//Component for a roll, its price, and options, as would be shown on the products page
export default function Slider(props){

  const setStoredOptions = useStore(setStoredOptionsSelector)
  const storedOptions = useStore(storedOptionsSelector)

  const updateSlider = function(event) {
  if (props.setSliderVal ==='volume')
    setStoredOptions({...storedOptions, volume: event.target.value});
  }

  return (
    <div className="slidecontainer">
      <span>Music Volume: {props.sliderVal}</span>
      <input type="range" min="0" max="100"  step="10" value={props.sliderVal} className="slider" onChange={updateSlider}/>
    </div>
  ) 
}
