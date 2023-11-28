import React from 'react';
import './slider.css';

// import { useStore } from '../state/useStore'

//Component for a roll, its price, and options, as would be shown on the products page
export default function Slider(props){
  const updateSlider = function(event) {
    props.setSliderVal(event.target.value);
  }

  return (
    <div className="slidecontainer">
      <span>Music Volume: {props.sliderVal}</span>
      <input type="range" min="0" max="100"  step="10" value={props.sliderVal} className="slider" onChange={updateSlider}/>
    </div>
  ) 
}
