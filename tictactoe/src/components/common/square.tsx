import React from "react";

interface SquareProps {
    value: string | null;
    onClick: () => void;
}

const Square = React.memo(function Square({ value, onClick }: SquareProps) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
});

export default Square