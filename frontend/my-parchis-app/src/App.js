import React, { useState, useEffect } from 'react';
import Board from './components/Board';

function App() {
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        // Obtener el estado inicial del juego al cargar
        fetch('http://localhost:3001/game')
            .then(res => res.json())
            .then(data => setGameState(data));
    }, []);

    if (!gameState) return <div>Cargando...</div>;

    const handleRoll = () => {
        fetch('http://localhost:3001/roll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setGameState(data.gameState);
        });
    };

    return (
        <div>
            <h1>Juego de Parchís</h1>
            <Board gameState={gameState} />
            <p>Turno del jugador: {gameState.playerTurn}</p>
            <button onClick={handleRoll}>
                Tirar Dado
            </button>
        </div>
    );
}

export default App;
