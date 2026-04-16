import axios from 'axios';

const scryfallApi = axios.create({
    baseURL: 'http://localhost:4000/api/scryfall',
    headers: { ' Content-Type': 'application/json' }
});

export const scryfallAPI = {
    search: (query, page = 1) =>
        scryfallApi.get('/search',{ params: { q: query, page} }),

    getByName: (name, fuzzy = false) =>
        scryfallApi.get ('/named', { params: { name, fuzzy } }),

    getRandom: (query = null ) =>
        scryfallApi.get('/random', { params: query ? { q: query} : {} }),

    



};