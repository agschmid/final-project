import React, { useEffect, useState } from "react";

import { useStore } from './state/useStore'

const setPaddlePositionSelector = s => s.setPaddlePosition



// https://codesandbox.io/examples/package/react-accelerometer
// TODO: Freaks out when phone is past upright
function Accelerometer() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const setPaddlePosition = useStore(setPaddlePositionSelector);
  
  const [center, setCenter] = useState({x:0, y:0})

  function handleMotionEvent(event) {
    let frontToBack_degrees = event.beta;
    let leftToRight_degrees = event.gamma;
  
    setCenter((prevCenter) => {
      let xCenter = prevCenter.x;
      let yCenter = prevCenter.y;
  
      // Update position and clip it to bounds
      let px = (leftToRight_degrees - xCenter) * 0.1;
      if (px > 2 || px < -2) {
        px = Math.max(-2, Math.min(2, px));
        xCenter = leftToRight_degrees - Math.sign(leftToRight_degrees-xCenter) * 20;      
      }
  
      let py = (-frontToBack_degrees + yCenter) * 0.1;
      if (py > 2 || py < -2) {
        py = Math.max(-2, Math.min(2, py));
        yCenter = frontToBack_degrees - Math.sign(frontToBack_degrees-yCenter) * 20;
      }
  
      setPaddlePosition({ x: px, y: py });
      return { x: xCenter, y: yCenter }; 
    });
  }




  useEffect(() => {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            setPermissionGranted(true);
            window.addEventListener("deviceorientation", handleMotionEvent);
          }
        })
        .catch(console.error);
    } else {
      setPermissionGranted(true);
      window.addEventListener("deviceorientation", handleMotionEvent);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleMotionEvent);
    };
  }, []);



  function handlePermissionGranted() {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          setPermissionGranted(true);
          window.addEventListener("devicemotion", handleMotionEvent);
        }
      })
      .catch(console.error);
  }

  return ( //TODO INcoprorate this menu with my other ones
    <>
      {permissionGranted ? (
        <></>
      ) : (
        <div className="modal" id="modal">
          <div className="modal-content">
            <h2>Allow access to device motion and orientation</h2>
            <p>
              This app requires access to device motion and orientation to
              function properly.
            </p>
            <button className="btn" onClick={handlePermissionGranted}>
              Grant Permission
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Accelerometer;
