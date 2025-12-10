import './App.css';
import { useCallback, useMemo, useState } from 'react';
import Board from '../components/board';

function App() {
  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const xIsNext: boolean = stepNumber % 2 === 0;
  const currentSquares: Array<string | null> = history[stepNumber];

  const handlePlay = useCallback((nextSquares: Array<string | null>) => {
    const nextHistory = [
      ...history.slice(0, stepNumber + 1),
      nextSquares
    ];
    setHistory(nextHistory);
    setStepNumber(nextHistory.length - 1);
  }, [history, stepNumber]);

  const jumpTo = useCallback((nextStep: number) => {
    setStepNumber(nextStep);
  }, []);

  const moves = useMemo(() =>
    history.map((_, move) => {
      const description: string = move > 0 ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    }),
  [history, jumpTo]);

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );

}

export default App
