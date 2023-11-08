import React, { Component } from 'react';
import './pause.css';

//Component for a roll, its price, and options, as would be shown on the products page
class PauseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }

  render() {
    return (
       <div id="pauseScreen">
        <button className='shortBox thinBox red bottomMargin'>EXIT GAME</button>
        <button className='shortBox colorful'>customize visuals</button>
        <button className='bottomMargin'>accessibility & <br></br> controls</button>
        <button className='bigFont green'>RESUME</button>
       </div>
    ) 
  }
}

export default PauseScreen