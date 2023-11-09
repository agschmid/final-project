import React from 'react';
import './home.css';

//Component for a roll, its price, and options, as would be shown on the products page
function HomeScreen(props){
  return (
      <div id="homeScreen">
      <button className='shortBox colorful' onClick={() => props.setGame('customize')}>customize visuals</button>
      <button className='bottomMargin' onClick={() => props.setGame('accessibility')}>accessibility & <br></br> controls</button>
      <button className='bigFont green' onClick={function(){props.setGame('playing'); props.setPlay(true);}}>PLAY GAME</button>
      </div>
  ) 
}

export default HomeScreen