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

//Rutas

app.use('/api/cards', cardRoutes);
app.use('/api/scryfall', scryfallRoutes);

