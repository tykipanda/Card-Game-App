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

    const searchCard = useCallback (async (query, page = 1) =>{
        setLoading (true); setError(null);
    try {
        const { data } = await scryfallAPI.search(query, page);
        setCards(data.cards);
        
    } }
    )
}