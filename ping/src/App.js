import {React, useEffect} from 'react';
import "./style.css" 

import Screen from './Screen.js';

function App() {

  useEffect(() => {
    document.body.addEventListener("touchstart", function (e) {
      if (e.target.id === "canvasParent") {
          e.preventDefault();
      }
    }, { passive: false });
    document.body.addEventListener("touchend", function (e) {
        if (e.target === "canvasParent") {
            e.preventDefault();
        }
    }, { passive: false });
    document.body.addEventListener("touchmove", function (e) {
        if (e.target === "canvasParent") {
            e.preventDefault();
        }
    }, { passive: false });
  },[]);

  return (
    <div id="parentContainer">
      <Screen></Screen>
    </div>
  );
}


export default App;