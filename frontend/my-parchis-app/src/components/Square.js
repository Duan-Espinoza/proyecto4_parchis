import React from 'react';
import './Square.css';

const Square = ({ id, children }) => {
    return (
        <div className="square">
            {children}
        </div>
    );
};

export default Square;
