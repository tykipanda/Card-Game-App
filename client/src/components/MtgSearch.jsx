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

            {/*Barra de búsqueda */}
            <form onSubmit={handleSearch}
            style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 24px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Ej: "Lightning bolt", "t:creature c:red"'
            style={{
                flex: 1, padding: '12px 16px',
                borderRadius: '8px', border: '1px solid #444',
                background: '#1e1e2e', color: '#fff', fontSize: '1rem'
            }}
            />
            <button type="submit" disabled={loading}
            style={{
                padding: '12px 24px', borderRadius: '8px',
                background: '#7c3aed', color: '#fff',
                border: 'none', cursor: 'pointer', fontWeight: 600
            }}>
                Buscar
            </button>
            </div>

                {/* Sugerencias de autocompletado*/}
                {showSuggestions && suggestions.length > 0 && (
                    <ul style={{
                        position:'absolute', top: '100%', left: 0, right: 0,
                        background: '#2a2a3e', borderRadius: '0 0 8px 8px',
                        listStyle: 'none', margin: 0, padding: 0,
                        zIndex: 10, maxHeight: '240px', overflowY: 'auto'
                    }}>
                        {suggestions.map((name, i) => (
                            <li key={i}
                            onClick={() => handleSuggestionClick(name)}
                            style={{
                                padding: '10px 16px', cursor: 'pointer',
                                borderBottom: '1px solid #333', color: '#ccc'
                            }}>
                                {name}
                            </li>
                        ))}
                    </ul>
                )}
            </form>

            
        </div>
    )


}