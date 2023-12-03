import {React, useState, useEffect} from 'react';
import './views-css/countdown.css';
import {useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay

//Component for a roll, its price, and options, as would be shown on the products page
function CountdownScreen(){
  const setOverlay = useStore(setOverlaySelector)
  const [countVal, setCountVal] = useState(3);

  const handleTimer = (count) => {
    if (count>0){
      setCountVal(countVal-1)
    } else {
      setOverlay("playing")
    }
  }

  //https://stackoverflow.com/questions/5606600/simple-3-2-1-countdown-in-javascript-jquery  
  useEffect(() => {
    const timer = setInterval(function() { handleTimer(countVal); }, 800);
    return () => {
      clearInterval(timer);
  }});


  return (
      <div id="countdownScreen">
        <span id='countDisplay'>{countVal ? countVal : 'PLAY!'}</span>        
      </div>
  ) 
}

export default CountdownScreen