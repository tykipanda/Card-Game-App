import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api/cards', 
    header: { 'Content-type': 'application/json' }
});

