import React, { useState, useEffect, useRef } from 'react';
import './StopClock.css';

function StopClock() {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // useEffect Hook to manage interval timer
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    // Cleanup timer on component unmount
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Start the timer
  const handleStart = () => {
    setIsRunning(true);
  };

  // Pause the timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Stop and Reset the timer
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Helper function to format time values
  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    const pad = (num) => String(num).padStart(2, '0');

    return {
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      milliseconds: pad(milliseconds)
    };
  };

  const { hours, minutes, seconds, milliseconds } = formatTime();

  return (
    <div className="stopclock-container">
      <div className="stopclock-card">
        <h1 className="stopclock-title">⏱️ Digital Stop Clock</h1>
        
        {/* Status indicator badge */}
        <div className={`status-badge ${isRunning ? 'running' : time > 0 ? 'paused' : 'stopped'}`}>
          {isRunning ? 'RUNNING' : time > 0 ? 'PAUSED' : 'STOPPED'}
        </div>

        {/* Digital Time Display */}
        <div className="display-box">
          <div className="time-unit">
            <span className="time-value">{hours}</span>
            <span className="time-label">HOURS</span>
          </div>
          <span className="separator">:</span>
          
          <div className="time-unit">
            <span className="time-value">{minutes}</span>
            <span className="time-label">MIN</span>
          </div>
          <span className="separator">:</span>

          <div className="time-unit">
            <span className="time-value">{seconds}</span>
            <span className="time-label">SEC</span>
          </div>
          <span className="separator">:</span>

          <div className="time-unit">
            <span className="time-value ms">{milliseconds}</span>
            <span className="time-label">MS</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="controls-group">
          {!isRunning ? (
            <button 
              id="start-btn"
              className="btn btn-start" 
              onClick={handleStart}
            >
              ▶ Start
            </button>
          ) : (
            <button 
              id="pause-btn"
              className="btn btn-pause" 
              onClick={handlePause}
            >
              ⏸ Pause
            </button>
          )}

          <button 
            id="stop-btn"
            className="btn btn-stop" 
            onClick={handleStop}
            disabled={time === 0 && !isRunning}
          >
            ⏹ Stop / Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopClock;
