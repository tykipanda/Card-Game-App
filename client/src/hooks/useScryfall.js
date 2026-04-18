import { useState, useCallback } from "react";
import { scryfallAPI } from "../services/scryfallApi";

export function useScryfall() {
    const [cards, setCards] = useState([]);
    const [randomCard, setRandomCard] = useState([null]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalCards, setTotalCards] = useState(0);
    const [hasMore, setHasMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentQuery, setCurrentQuery] = useState('');

    const searchCards = useCallback (async (query, page = 1) =>{
        setLoading (true); setError(null);
    try {
        const { data } = await scryfallAPI.search(query, page);
        setCards(data.cards);
        setTotalCards (data.total_cards);
        setHasMore(data.has_more);
        setCurrentPage(page);
        setCurrentQuery(query);
    } catch (err){
        setError('Error al buscar cartas');
        setCards([]);
    } finally { setLoading(false); }
}, []);

const loadMore = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
        
    }
})


};