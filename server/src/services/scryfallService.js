const axios = require('axios');

const BASE_URL = 'https://api.scryfall.com';

// Instancia de axios  con headers requeridos por Scryfall
const scryfallCLient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'User-Agent': 'CardGameApp/1.0',
        'Accept': 'application/json'
    }
});

// Delay para evitar rate limits(100ms entre peticiones)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const scryfallService = 