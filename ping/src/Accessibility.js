import React, { Component } from 'react';
import './accessibility.css';

//Component for a roll, its price, and options, as would be shown on the products page
class AccessibilityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }

  render() {
    return (
      <div id="accessibilityScreen">
        <button className='shortBox'>speed slider</button>
        <button className='shortBox'>size slider</button>
        <button className='shortBox bottomMargin'>sound tickbox/slider</button>
        <button className='bigFont green'>RETURN</button>
      </div>
    ) 
  }
}

export default AccessibilityScreen