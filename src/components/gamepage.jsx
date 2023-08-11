// gamepage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gamepage.css';


import Random from './Ramdom';
import Adv2 from '../advertisement/adv2';

export const Gamepage1 = () => {
  const [countdown, setCountdown] = useState(3);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // 最初はタイマーを動作させる
  const [isTimerVisible, setIsTimerVisible] = useState(false); // タイマー表示の制御
 

  useEffect(() => {
    let countdownInterval;

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      
      }, 1000);
    } else if (isRunning) {
      setIsTimerVisible(true); // カウントダウン終了後にタイマーを表示
      const timerInterval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 0.1); 
      
      }, 100); 

      return () => {
        clearInterval(timerInterval);
      };
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, isRunning]);

  const handleStop = () => {
    setIsRunning(false); 
  };

  return (
    <div>
      <h1>gamepage</h1>
      {countdown > 0 ? (
        <p>Countdown: {countdown}</p>
      ) : (
        <>
          {isTimerVisible && (
            <p className={`timer ${isRunning ? '' : 'timer-stopped'}`}>
              Result: {timer.toFixed(1)} seconds
            </p>
          )}
        {isRunning && (
            <button style={{position:"absolute" ,left:"200px",zIndex:-100,top:"200px"}} onClick={handleStop}>Complete</button> // タイマーを停止するボタン
          )}
        </>
      )}
     <div style={{position:"absolute",}}>
<Random ></Random>
         
     </div>
     <div style={{position:"absolute",top:"200px",left:"200px",zIndex:-50}}><Adv2></Adv2></div>
     <div style={{position:"absolute",top:550}}>
      <Link to="/">Back to Home</Link>
     
      </div>
    </div>
  );
};
