import React from 'react';
import { useStore } from '../state/useStore'

import './views-css/slider.css';

// import { useStore } from '../state/useStore'
const setStoredOptionsSelector = s => s.setStoredOptions
const storedOptionsSelector = s => s.storedOptions

//Component for a roll, its price, and options, as would be shown on the products page
export default function Slider(props){

  const setStoredOptions = useStore(setStoredOptionsSelector)
  const storedOptions = useStore(storedOptionsSelector)

  
  const updateSlider = function(event) {
    switch(props.setSliderVal ) {
      case 'volume':
        setStoredOptions({...storedOptions, volume: event.target.value});
        break
      case 'paddle':
        setStoredOptions({...storedOptions, paddleWidth: event.target.value});
        break
      case 'speed':
        setStoredOptions({...storedOptions, speed: event.target.value});
        break
      default:
        break
    }
  }

  return (
    <div className="slidecontainer">
      <span>{props.title}: {props.sliderVal}</span>
      <input type="range" min={props.min} max={props.max}  step={props.step} value={props.sliderVal} className="slider" onChange={updateSlider}/>
      <span>{props.description}</span>
    </div>
  ) 
}
