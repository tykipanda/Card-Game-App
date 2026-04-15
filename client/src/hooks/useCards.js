import { useState, useCallback } from "react";
import { cardAPI } from "../services/api";

export function useCards() {
    const [deckId, setDeckId] = useState (null);
    const [hand, setHand] = useState ([]);
    const [remaining, setRemaining] = useState (0);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (null);

}