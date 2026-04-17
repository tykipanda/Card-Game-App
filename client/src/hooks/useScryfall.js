import { useState, useCallback } from "react";
import { scryfallAPI } from "../services/scryfallApi";

export function useScryfall() {
    const [cards, setCards] = useState([]);
    const [randomCard, setRandomCard] = useState([null]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
}