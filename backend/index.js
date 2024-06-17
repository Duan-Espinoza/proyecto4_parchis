const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Estado del juego (ejemplo simple)
let gameState = {
    playerTurn: 1,
    positions: [
        { player: 1, position: 0 }, // Jugador 1
        { player: 2, position: 0 }  // Jugador 2
    ]
};

// Endpoint para obtener el estado del juego
app.get('/game', (req, res) => {
    res.json(gameState);
});

// Endpoint para tirar el dado
app.post('/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    let currentPlayer = gameState.positions[gameState.playerTurn - 1];
    currentPlayer.position += roll;

    // Lógica de fin de turno
    gameState.playerTurn = gameState.playerTurn === 1 ? 2 : 1;
    res.json({ roll, gameState });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
