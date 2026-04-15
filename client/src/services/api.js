import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api/cards', 
    header: { 'Content-type': 'application/json' }
});

export const cardAPI = {
    newGame: (deckCount = 1) => api.post('/new-game', { deckCount }),
    drawCards: (deckId, count = 1) => api.post('/draw', { deckId, count}),
    shuffleDeck: (deckId) => api.post('shuffle', { deckId }),
    addToPile: (deckId, pileName, cards) => api.post('/pile', {deckId, pileName, cards }),
};

export default api; 