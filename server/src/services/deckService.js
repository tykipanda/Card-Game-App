const axios = require('axios');

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

const deckService = {
    async createDeck(deckCount = 1) {
        const { data } = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=${deckCount}`);
        return data;
    },

    async drawCards(deckId, count = 1) {
        const { data } = await axios.get(`${BASE_URL}/${deckId}/draw/?count=${count}`);
        return data;
    },

    async shuffleDeck(deckId) {
        const { data } = await axios.get(`${BASE_URL}/${deckId}/shuffle/`);
        return data;
    },

    async createPartialDeck(cards) {
        const { data } = await axios.get(`${BASE_URL}/new/shuffle/?cards=${cards}`);
        return data;
    }

    async addToPile(deckId, pileName, cards) {
        const { data } = await axios.get(`${BASE_URL}/${deckId}/pile/${pileName}/add/?cards=${cards}`);
        return data;
    },

    