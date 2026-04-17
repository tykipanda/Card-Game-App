import { useState, useCallback } from "react";
import { scryfallAPI } from "../services/scryfallApi";

export function useScryfall() {
    const [cards, setCards] = useState([]);
    const [randomCard, setRandomCard] = useState([null]);
    
}