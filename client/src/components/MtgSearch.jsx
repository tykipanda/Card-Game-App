import React, { useState, useEffect, useRef} from "react";
import { useScryfall } from '../hooks/useScryfall';
import MtgCard from "./MtgCards";

export default function MtgSearch() {
    const [query, setQuery] = useState('');
    const{
        card, loading, error, totalCards, hasMore,
        searchCards, loadMore, fetchAutocomplete, 
        suggestions, clearResults
    } = useScryfall();
    const [showSuggestions, setShowSuggestions] = useState(false);
    const debounceRef = useRef(null);

    // Autocompletar con debounce
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            if (query, length >= 2 ) {
                fetchAutocomplete(query);
                setShowSuggestions(true);
            } else {
                setShowSuggestions(false);
            }
        }, 300);
        return () => clearTimeout(debounceRef.current);
    }, [query, fetchAutocomplete]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            searchCards(query);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (name) => {
        setQuery (name);
        searchCards(name);
        setShowSuggestions(false);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', color: '#fff'}}>
                Buscar Cartas de Magic
            </h2>

            
        </div>
    )


}