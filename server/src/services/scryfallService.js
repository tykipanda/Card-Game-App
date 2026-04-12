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

    // Obtener carta aleatoria
    async getRandomCard(query = null) {
        await delay (100);
        const params = query ? { q: query } : {};
        const { data } = await scryfallCLient.get('/cards/random', { params });
        return data;
    },

    // Obtener carta por ID de Scryfall
    async getCardById(id) {
        await delay (100);
        const { data } = await scryfallCLient.get(`/cards/${id}`);
        return data;
    },

    // Obtener carta por set y número de coleccionista
    async getCardBySet(setCode, collectorNumber) {
        await delay (100);
        const { data } = await scryfallCLient.get(`/cards/${setCode}/${collectorNumber}`);
        return data;
    }, 

    // Autocompletar nombres de cartas
    async autocomplete(query) {
        await delay (100);
        const { data } = await scryfallCLient.get('/cards/autocomplete', { params: { q: query }
        });
        return data;
    },

    // Obtener todos los sets
    async getSets() {
        await delay (100);
        const { data } = await scryfallCLient.get('/sets');
        return data;
    },

    

