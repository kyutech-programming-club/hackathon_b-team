// gamepage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gamepage.css';
export const Page1 = () => {
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
        setTimer(prevTimer => prevTimer + 0.1); // タイマーを0.1秒ずつ増加
      }, 100); // 0.1秒 (100ミリ秒) 単位のタイマー

      return () => {
        clearInterval(timerInterval);
      };
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, isRunning]);

  const handleStop = () => {
    setIsRunning(false); // タイマー停止
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
            <button onClick={handleStop}>Complete</button> // タイマーを停止するボタン
          )}
        </>
      )}
     <div>
      ここにゲームを置く
     </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
