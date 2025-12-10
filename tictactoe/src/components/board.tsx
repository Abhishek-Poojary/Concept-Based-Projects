import { useCallback, useMemo } from "react";
import { calculateWinner } from "../utilities/utility";
import Square from "./common/square";

interface BoardProps {
    xIsNext: boolean;
    squares: Array<string | null>;
    onPlay: (nextSquares: Array<string | null>) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {

    const winner = useMemo(() => {
        return calculateWinner(squares);
    }, [squares]);

    const handleClick = useCallback((i: number) => {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }, [squares, xIsNext, winner, onPlay]);

    const handlers = useMemo(() => {
        return squares.map((_, i) => () => handleClick(i));
    }, [squares, handleClick]);

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    
    return (
        <>
            <div className="status">{status}</div>
            <div className='game-board'>
            {[0, 1, 2].map(row => (
                    <div className="board-row" key={row}>
                        {[0, 1, 2].map(col => {
                            const index = row * 3 + col;
                            return (
                                <Square key={index} value={squares[index]} onClick={handlers[index]} />
                            );
                        })}
                    </div>
                ))
            }
            </div>
        </>
    )
}