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
        { player: 1, position: 0 },
        { player: 2, position: 0 }
    ]
};

// Función para mover la ficha según las reglas
function movePiece(playerIndex, roll) {
    let newPosition = gameState.positions[playerIndex].position + roll;
    
    // Si la nueva posición excede el tablero (simple de 16 casillas), se ajusta
    if (newPosition >= 16) {
        newPosition = 16;
    }

    // Actualizar la posición del jugador
    gameState.positions[playerIndex].position = newPosition;
}

// Endpoint para obtener el estado del juego
app.get('/game', (req, res) => {
    res.json(gameState);
});

// Endpoint para tirar el dado
app.post('/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    const currentPlayerIndex = gameState.playerTurn - 1;
    
    // Mover la ficha del jugador actual
    movePiece(currentPlayerIndex, roll);

    // Lógica de fin de turno
    gameState.playerTurn = gameState.playerTurn === 1 ? 2 : 1;
    res.json({ roll, gameState });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
