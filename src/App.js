import './App.css';
import React,{useState,useEffect} from 'react'
import Countdown from "react-countdown";

function App() {
  
  const [btnactive,setBtnActive] = useState(false)
  
  
  function timer(){
    setBtnActive(true)
  }
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span className='number'>{minutes} : {seconds}</span>;
    }
  };


  return (
    <div className="App">
      <div className='title'>
        <div className='logo-container'>
            <img  className='logo-img' src='/logo.png' alt='logo' />           
        </div>
        <div className='metto'>
          Education is a profitable  investment offering.
        </div>
      </div>
      <div className='timer'>

            {btnactive === false && 
              <div className='clock'>
              <button onClick={timer} className='btn'>Turn on Relax Mode </button>
              </div>
            }

            {btnactive === true && 
              <div className='clock'>
                <button onClick={() => setBtnActive(true)} className='btn-active'>
                    <Countdown date={Date.now() + 300000} renderer={renderer} />

                </button>
              </div>
            }   
     
      </div>
    </div>
  );
}

export default App;
