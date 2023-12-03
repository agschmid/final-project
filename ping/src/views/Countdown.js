import {React, useState, useEffect} from 'react';
import {useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay

// Countdown screen, that transitions from other menus into the game
function CountdownScreen(){
  const setOverlay = useStore(setOverlaySelector)
  const [countVal, setCountVal] = useState(3);

  // Countdown function, that updates the number displayed, and then transitions the game to playing
  // The countdown function was translate to react based off the following resource.
  // https://stackoverflow.com/questions/5606600/simple-3-2-1-countdown-in-javascript-jquery 
  const handleTimer = (count) => {
    if (count>0){
      setCountVal(countVal-1)
    } else {
      setOverlay("playing")
    }
  }

  useEffect(() => {
    const timer = setInterval(function() { handleTimer(countVal); }, 800);
    return () => {
      clearInterval(timer);
  }});

  return (
      <main id="countdownScreen" className='hugeFont centeredScreen'>
        <span id='countDisplay'>{countVal ? countVal : 'PLAY!'}</span>        
      </main>
  ) 
}

export default CountdownScreen