import React, { useState, useEffect, useRef } from 'react';

/**
 * Digital Stop Clock / Timer Component in React
 * 
 * Uses React Hooks:
 * 1. useState  - To store elapsed time in milliseconds and running state.
 * 2. useEffect - To trigger and clear the interval timer when state changes.
 * 3. useRef    - To store the reference to the active timer interval ID.
 */
function DigitalStopClock() {
  // State 1: Elapsed time in milliseconds
  const [time, setTime] = useState(0);

  // State 2: Boolean flag to check if timer is running
  const [isRunning, setIsRunning] = useState(false);

  // Ref: Holds the interval ID without causing re-renders
  const timerRef = useRef(null);

  // useEffect: Runs whenever `isRunning` status changes
  useEffect(() => {
    if (isRunning) {
      // Start interval to increment time every 10 milliseconds
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      // Clear interval when paused or stopped
      clearInterval(timerRef.current);
    }

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Handler: Start the timer
  const handleStart = () => {
    setIsRunning(true);
  };

  // Handler: Pause the timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Handler: Stop and Reset the timer back to 0
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Helper: Format milliseconds into HH : MM : SS : MS
  const formatTime = () => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    const pad = (unit) => String(unit).padStart(2, '0');

    return {
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      milliseconds: pad(milliseconds)
    };
  };

  const { hours, minutes, seconds, milliseconds } = formatTime();

  // Inline styling for quick preview/standalone lab exam submission
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    card: {
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
      border: '1px solid #334155',
      minWidth: '380px'
    },
    title: {
      margin: '0 0 20px 0',
      fontSize: '24px',
      color: '#38bdf8'
    },
    display: {
      fontSize: '48px',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      letterSpacing: '2px',
      backgroundColor: '#090d16',
      padding: '20px 30px',
      borderRadius: '12px',
      marginBottom: '30px',
      color: '#22d3ee',
      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.6)'
    },
    controls: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center'
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.2s ease',
      color: '#fff'
    },
    startBtn: {
      backgroundColor: '#10b981'
    },
    pauseBtn: {
      backgroundColor: '#f59e0b'
    },
    stopBtn: {
      backgroundColor: '#ef4444'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Digital Stop Clock</h2>
        
        {/* Digital display */}
        <div style={styles.display}>
          {hours}:{minutes}:{seconds}:{milliseconds}
        </div>

        {/* Action buttons */}
        <div style={styles.controls}>
          {!isRunning ? (
            <button
              style={{ ...styles.button, ...styles.startBtn }}
              onClick={handleStart}
            >
              Start
            </button>
          ) : (
            <button
              style={{ ...styles.button, ...styles.pauseBtn }}
              onClick={handlePause}
            >
              Pause
            </button>
          )}

          <button
            style={{ ...styles.button, ...styles.stopBtn }}
            onClick={handleStop}
            disabled={time === 0 && !isRunning}
          >
            Stop / Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default DigitalStopClock;
