import React, { Component } from 'react';
import './play.css';

//Component for a roll, its price, and options, as would be shown on the products page
class PlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }

  render() {
    return (
       <div id="playScreen">
        <button className='shortBox thinBox'>PAUSE</button>
       </div>
    ) 
  }
}

export default PlayScreen