import React from 'react';

const Board = ({ gameState }) => {
    const { positions } = gameState;
    const boardSize = 16; // Tamaño del tablero
    const board = Array(boardSize).fill(null);

    positions.forEach(pos => {
        board[pos.position] = pos.player;
    });

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 50px)', gap: '5px' }}>
            {board.map((cell, index) => (
                <div key={index} style={{ width: '50px', height: '50px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: cell ? (cell === 1 ? 'red' : 'blue') : 'white' }}>
                    {cell ? cell : ''}
                </div>
            ))}
        </div>
    );
};

export default Board;
