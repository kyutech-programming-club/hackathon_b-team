// gamepage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./gamepage.css";
import { doc, setDoc, collection } from "firebase/firestore";
import { db, auth } from "../FirebaseConfig";
import Random from "./Ramdom";

export const Page1 = () => {
  const [countdown, setCountdown] = useState(3);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const handleStop = () => {
    setIsRunning(false);
    const user = auth.currentUser;

    if (user) {
      const rankingRef = doc(collection(db, "rankings"));
      setDoc(rankingRef, {
        userId: user.uid,
        time: timer.toFixed(1), // タイマーの値を保存
        timestamp: new Date(),
      });
    }
  };

  useEffect(() => {
    let countdownInterval;

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (isRunning) {
      setIsTimerVisible(true); // カウントダウン終了後にタイマーを表示
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.1);
      }, 100);

      return () => {
        clearInterval(timerInterval);
      };
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, isRunning]);

  return (
    <div style={{ backgroundColor: "white" }}>
      {countdown > 0 ? (
        <p style={{ fontSize: "300px" }}>{countdown}</p>
      ) : (
        <>
          {isTimerVisible && (
            <p className={`timer ${isRunning ? "" : "timer-stopped"}`}>
              Result: {timer.toFixed(1)} seconds
            </p>
          )}
          <div style={{ position: "absolute" }}>
            <Random></Random>
          </div>
          {isRunning && (
            <button
              style={{
                position: "absolute",
                left: "600px",
                zIndex: -100,
                top: "200px",
                width: 100,
              }}
              onClick={handleStop}
            >
              Complete
            </button> // タイマーを停止するボタン
          )}
        </>
      )}
      <Link to="/" style={{position: 'absolute',top: "500px",left: '0px'}}>Back to Home</Link>
    </div>
  );
};
