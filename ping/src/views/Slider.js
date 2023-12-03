import React from 'react';
import { useStore } from '../state/useStore'
import './views-css/slider.css';

const setStoredOptionsSelector = s => s.setStoredOptions
const storedOptionsSelector = s => s.storedOptions

// A slider component, that can handle changes to volume, paddle size, or speed.
// Requires title, value, min, max, step, and description to render properly.
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
    <div className="slidecontainer shadedBox">
      <label for={props.setSliderVal}> <span>{props.title}: {props.sliderVal}</span></label>
      <input id={props.setSliderVal} type="range" min={props.min} max={props.max}  step={props.step} value={props.sliderVal} className="slider" onChange={updateSlider}/>
      <span>{props.description}</span>
    </div>
  ) 
}
