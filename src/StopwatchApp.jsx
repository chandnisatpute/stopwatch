import React, { useState, useEffect } from "react";

function StopwatchApp() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  const handleReset = () => {
    setSecondsElapsed(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const formattedSeconds = sec < 10 ? `0${sec}` : sec;
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Stopwatch</h1>
      <h2>Time: {formatTime(secondsElapsed)}</h2>
      <div>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default StopwatchApp;
