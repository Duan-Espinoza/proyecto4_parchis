import React, { useState, useEffect } from 'react';
import Board from './components/Board';

function App() {
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        // Reemplaza 'TU_NGROK_URL' con la URL correcta de ngrok si es necesario
        fetch('http://localhost:3001/game')
            .then(res => res.json())
            .then(data => setGameState(data))
            .catch(error => console.error('Error al obtener el estado del juego:', error));
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
        })
        .catch(error => console.error('Error al tirar el dado:', error));
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
