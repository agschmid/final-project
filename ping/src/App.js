import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Cubes.js';
import "./style.css" 

// import HomeScreen from './Home';
// import PauseScreen from './Pause.js';
// import PlayScreen from './Play.js';
// import CustomizeScreen from './Customize.js';
import AccessibilityScreen from './Accessibility.js';

function App() {
  let canvasStyle = {
    position: "absolute",
  }

  return (
    <div id="parentContainer">
      <Canvas style={canvasStyle}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <div id="menu">
        <AccessibilityScreen></AccessibilityScreen>
      </div>
    </div>
  );
}

export default App;