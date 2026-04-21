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
            if (query, length) >= 2 ) {
                
            }
        })
    })

;}