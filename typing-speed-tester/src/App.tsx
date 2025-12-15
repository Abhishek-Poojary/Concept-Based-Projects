import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css';

// Static sample text to avoid re-creation on renders
const SAMPLE_TEXT: string = "The quick brown fox jumps over the lazy dog. This is a sample text for typing speed test.";

const App: React.FC = React.memo(() => {
  const [userInput, setUserInput] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Memoized WPM: Only recalculates when userInput or timeElapsed changes
  const wpm = useMemo((): number => {
    const wordsTyped: number = userInput.trim().split(/\s+/).length;
    const timeInMinutes: number = timeElapsed / 60000;
    return timeInMinutes > 0 ? Math.round(wordsTyped / timeInMinutes) : 0;
  }, [userInput, timeElapsed]);

  // Memoized accuracy: Only recalculates when userInput changes
  const accuracy = useMemo((): number => {
    let correctChars: number = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === SAMPLE_TEXT[i]) correctChars++;
    }
    return userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
  }, [userInput]);

  // Timer effect: Runs only when isActive or startTime changes
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isActive && startTime) {
      interval = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, startTime]);

  // Memoized input handler: Handles typing, starts/stops test without setState in effects
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newInput = e.target.value;
    setUserInput(newInput);

    // Start the test on first input
    if (newInput.length > 0 && !isActive) {
      setIsActive(true);
      setStartTime(Date.now());
    }

    // Stop the test when complete
    if (newInput === SAMPLE_TEXT) {
      setIsActive(false);
    }
  }, [isActive]);

  // Memoized reset handler: Prevents function recreation
  const handleReset = useCallback((): void => {
    setUserInput('');
    setStartTime(null);
    setTimeElapsed(0);
    setIsActive(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div className="app">
      <h1>Typing Speed Tester</h1>
      <div className="sample-text">{SAMPLE_TEXT}</div>
      <textarea
        ref={textareaRef}
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing here..."
      />
      <div className="metrics">
        <p>Time: {Math.floor(timeElapsed / 1000)}s</p>
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
});

export default App;