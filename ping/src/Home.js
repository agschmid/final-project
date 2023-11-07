import React, { Component } from 'react';
import './home.css';

//Component for a roll, its price, and options, as would be shown on the products page
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }

  render() {
    return (
       <div id="homeScreen">
        <button className='shortBox colorful'>customize visuals</button>
        <button>accessibility & <br></br> controls</button>
        <br></br>
        <br></br>
        <button className='bigFont green'>PLAY GAME</button>
       </div>
    ) 
  }
}

export default HomeScreen