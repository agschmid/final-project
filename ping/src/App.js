import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Cubes.js';
import HomeScreen from './Home';

import "./style.css" 

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
        <HomeScreen></HomeScreen>
      </div>
    </div>
  );
}

export default App;