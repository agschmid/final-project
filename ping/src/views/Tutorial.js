import React, {useState} from 'react';
import './views-css/tutorial.css';
import { mobileCheck, useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const setGamePlayingSelector = s => s.setGamePlaying

// Information for each page of the tutorial 
const tutorialScreens = []
tutorialScreens.push({video: "./tutorial-clips/tut1.mp4", text: 'After the countdown, the ball will launch forward.', start: true, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut2.mp4", text: `Use your ${mobileCheck() ? 'finger' : 'mouse'} to move your paddle around.`, start: false, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut3.mp4", text: 'Your goal is to hit the ball back with the paddle. HINT: Use the glowing lines to estimate distance.', start: false, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut4.mp4", text: 'The enemy will always hit the ball, speeding it up (you can adjust this in the accessibility menu). When you miss, the game ends.', start: false, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut5.mp4", text: 'Your goal is to get as many points as possible – Good Luck!', start: false, end: true})


// Tutorial screen overlay
export default function TutorialScreen(props){
  const setOverlay = useStore(setOverlaySelector)
  const setGamePlaying = useStore(setGamePlayingSelector)
  const [currentTutScreen, setCurrentTutScreen] = useState(0)

  // Update the progress bar visual based on the current screen
  const progressBar = ()=>{
    let progressDivs = []
    for (let i=0; i<tutorialScreens.length; i++){
      if (i<=currentTutScreen){
        progressDivs.push(<div className='progress filled' key={i}></div>)
      } else {
        progressDivs.push(<div className='progress' key={i}></div>)
      }
    }
    return progressDivs
  }

  //Conditionally render the different pages of the tutorial, updating with setCurrentTutScreen hook
  return (
    <>
    <nav className = "tutorialHome">
      <button className='shortBox thinBox pauseMargin' onClick={() => setOverlay('home')}>HOME</button>
    </nav>

    <main className="tutorialParent">
      <div className = 'tutorialScreen shadedBox'>

        <h1 className='bigFont'>HOW TO PLAY</h1>

        <div className = "tutorialContent">
          <div className = "progressParent shadedBox">
            {progressBar()}
          </div>

          <video playsInline autoPlay muted loop className='tutVid' key={tutorialScreens[currentTutScreen].video}>
            <source src={tutorialScreens[currentTutScreen].video} type="video/mp4"/>
            <p>
                Your browser doesn't support HTML video. This video is described by the tutorial text below. 
            </p>
          </video>          

          <div className='tutorialText'>
            {tutorialScreens[currentTutScreen].text}
          </div>

          <div className ={`tutorialButtons ${tutorialScreens[currentTutScreen].start && "tutorialButtonsSingle"}`}>
            {!tutorialScreens[currentTutScreen].start && <button className = "shortBox thinBox" onClick={() => setCurrentTutScreen(currentTutScreen-1)}>BACK</button>}
            {tutorialScreens[currentTutScreen].end ? <button className='green playButton shortBox' onClick={function(){setOverlay('countdown'); setGamePlaying(true);}}>PLAY GAME</button> : <button  className = "shortBox thinBox" onClick={()=> setCurrentTutScreen(currentTutScreen+1)}>NEXT</button>}
          </div>
        </div>

      </div>
    </main>
    </>
  ) 
}