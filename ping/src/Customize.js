import React, { Component } from 'react';
import './customize.css';

//Component for a roll, its price, and options, as would be shown on the products page
class CustomizeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }

  render() {
    return (
      <div id="customizeScreen">
        <button className='shortBox colorful'>character</button>
        <button className='shortBox colorful bottomMargin'>color</button>
        <button className='bigFont green'>RETURN</button>
      </div>
    ) 
  }
}

export default CustomizeScreen