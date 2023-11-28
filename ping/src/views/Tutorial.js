import React, {useState} from 'react';
import './tutorial.css';
import { mobileCheck, useStore } from '../state/useStore'

const setOverlaySelector = s => s.setOverlay
const setGamePlayingSelector = s => s.setGamePlaying


const tutorialScreens = []

tutorialScreens.push({video: "./tutorial-clips/tut1.webm", text: 'After the countdown, the ball will launch forward.', start: true, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut2.webm", text: `Use your ${mobileCheck() ? 'finger' : 'mouse'} to move your paddle around.`, start: false, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut3.webm", text: 'Your goal is to hit the ball back with the paddle. HINT: Use the glowing lines to estimate distance.', start: false, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut4.webm", text: 'The enemy will always hit the ball, speeding it up (you can adjust this in the accessibility menu). When you miss, the game ends.', start: false, end: false})
tutorialScreens.push({video: "./tutorial-clips/tut5.webm", text: 'Your goal is to get as many points as possible – Good Luck!', start: false, end: true})


export default function TutorialScreen(props){
  const setOverlay = useStore(setOverlaySelector)
  const setGamePlaying = useStore(setGamePlayingSelector)
  const [currentTutScreen, setCurrentTutScreen] = useState(0)
  
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


  console.log(currentTutScreen)

  return (
    <>
    <div className = "tutorialHome">
      <button className='shortBox thinBox pauseMargin' onClick={() => setOverlay('home')}>HOME</button>
    </div>

    <div className="tutorialParent">

      <div className = 'tutorialScreen shadedBox'>
        <span className='bigFont'>HOW TO PLAY</span>
        <div className = "tutorialContent">
          <div className = "progressParent shadedBox">
            {progressBar()}
          </div>
            <video playsInline autoPlay muted loop className='tutVid'>
              <source src={tutorialScreens[currentTutScreen].video} type="video/webm"/>
            </video>          
          <div className='tutorialText'>{tutorialScreens[currentTutScreen].text}</div>
            <div className ={`tutorialButtons ${tutorialScreens[currentTutScreen].start && "tutorialButtonsSingle"}`}>
              {!tutorialScreens[currentTutScreen].start && <button className = "shortBox thinBox" onClick={() => setCurrentTutScreen(currentTutScreen-1)}>BACK</button>}
              {tutorialScreens[currentTutScreen].end ? <button className='green playButton shortBox' onClick={function(){setOverlay('countdown'); setGamePlaying(true); props.playSound();}}>PLAY GAME</button> : <button  className = "shortBox thinBox" onClick={()=> setCurrentTutScreen(currentTutScreen+1)}>NEXT</button>}
            </div>
          </div>
      </div>

    </div>
    </>
      // <div id="homeScreen">
      // <span className='bottomMargin' style={{color: 'white'}}>HIGHSCORE: {highScore}</span>
      // <button className='shortBox colorful' onClick={() => setOverlay('customize')}>customize visuals</button>
      // <button className='bottomMargin' onClick={() => setOverlay('accessibility')}>accessibility & <br></br> controls</button>
      // <button className='bigFont green' onClick={function(){setOverlay('countdown'); setGamePlaying(true); props.playSound();}}>PLAY GAME</button>
      // </div>
  ) 
}