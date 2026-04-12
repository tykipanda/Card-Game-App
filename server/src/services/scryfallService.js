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

const scryfallService = {
    // Busca cartas por texto (fulltext search)
    async searchCards(query, page = 1) {
        await delay (100);
        const { data } = await scryfallCLient.get('/cards/search', {
            params: { q: query, page }
        });
        return data;
    },

    // Buscar carta  por nombre exacto
    async getCardByName(name, fuzzy = false) {
        await delay (100);
        const params = fuzzy ? { fuzzy: name } : { exact: name };
        const { data } = await scryfallCLient.get('/cards/named', { params });
        return data;
    },

    