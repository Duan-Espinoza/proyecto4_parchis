import React from 'react';
import Square from './Square';
import Piece from './Piece';
import './Board.css';

const Board = ({ gameState }) => {
    const renderSquare = (i) => {
        let piece = null;
        gameState.positions.forEach(player => {
            if (player.position === i) {
                piece = <Piece player={player.player} />;
            }
        });

        return (
            <Square key={i} id={i}>
                {piece}
            </Square>
        );
    };

    const boardSize = 16; // Puedes ajustar esto según el tamaño del tablero que desees
    const squares = [];
    for (let i = 0; i < boardSize; i++) {
        squares.push(renderSquare(i));
    }

    return (
        <div className="board">
            {squares}
        </div>
    );
};

export default Board;
