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

