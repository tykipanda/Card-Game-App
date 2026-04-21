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
    
;}