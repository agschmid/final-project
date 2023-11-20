import React, { useEffect, useState } from "react";

import { useStore } from './state/useStore'


const paddlePositionSelector = s => s.paddlePosition
const setPaddlePositionSelector = s => s.setPaddlePosition



// https://codesandbox.io/examples/package/react-accelerometer
function Accelerometer() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const paddlePosition = useStore(paddlePositionSelector)
  const setPaddlePosition = useStore(setPaddlePositionSelector)


  function handleMotionEvent(event) {
    // let rotation_degrees = event.alpha;
    let frontToBack_degrees = event.beta;
    let leftToRight_degrees = event.gamma;

    // Update velocity according to how tilted the phone is
    let vx = paddlePosition.vx + leftToRight_degrees * 60; 
    let vy = paddlePosition.vy + frontToBack_degrees * 60;

    // Update position and clip it to bounds
    let px = paddlePosition.x + vx*.01;
    if (px > 2 || px < -2){ 
        px = Math.max(-2, Math.min(2, px)) // Clip px between 0-98
        vx = 0;
    }

    let py = paddlePosition.y - vy*.01;
    if (py > 2 || py < -2){
        py = Math.max(-2, Math.min(2, py)) // Clip py between 0-98
        vy = 0;
    }

    setPaddlePosition({x: px, y: py, vx: vx, vy: vy})
    // setX(event.accelerationIncludingGravity.x);
    // setY(event.accelerationIncludingGravity.y);
    // setZ(event.accelerationIncludingGravity.z);
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

  return (
    <>
      {permissionGranted ? (
        <div>
            position: {paddlePosition.x} {paddlePosition.y}
        </div>
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
