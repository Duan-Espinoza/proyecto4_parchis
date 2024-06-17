import React from 'react';
import './Piece.css';

const Piece = ({ player }) => {
    return (
        <div className={`piece player${player}`}>
            {player}
        </div>
    );
};

export default Piece;
