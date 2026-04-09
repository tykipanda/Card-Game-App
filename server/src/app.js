require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const cardRoutes = require('./routes/cards');
const scryfallRoutes = require('./routes/scryfall');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas

app.use('/api/cards', cardRoutes);
app.use('/api/scryfall', scryfallRoutes);

// Health check

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timesmap: new Date() });
});

// Manejo de errores global

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({
        error: err.message || 'Error interno del servidor'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
