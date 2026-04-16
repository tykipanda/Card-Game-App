import { useState, useCallback } from "react";
import { cardAPI } from "../services/api";

export function useCards() {
    const [deckId, setDeckId] = useState (null);
    const [hand, setHand] = useState ([]);
    const [remaining, setRemaining] = useState (0);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (null);

    const startNewGame = useCallback( async () => {
        setLoading(true); setError(null);
        try {
            const { data } = await cardAPI.newGame();
            setDeckId(data.deckId);
            setRemaining(data.remaining);
            setHand([]);
        } catch (err) { setError('Error al crear mazo'); }
        finally { setLoading(false); }
    }, []);

    const drawCard = useCallback ( async ( count = 1 ) => {
        if (!deckId) return;
        setLoading(true); setError(null);
        try {
        const { data } = await cardAPI.drawCards(deckId, count);
        setHand(prev => [...prev, ...data.cards]);
        setRemaining(data.remaining);
        } catch (err) { setError('Error al repartir cartas'); }
        finally { setLoading(false); }
        }, [deckId]);

    const shuffle = useCallback (async () => {
        if (!deackId) return;
        setLoading(true);
        try {
            const { data } = await cardAPI.shuffleDeck(deckId);
            setRemaining(data.remaining);
            setHand([]);
        } catch (err) { setError('Error al barajar'); }
        finally { setLoading(false); }
        }, [deckId]);

    const clearhand = useCallback(() => setHand([]), []);

    return { deckId, hand, remaining, loading, error, startNewGame, drawCard, shuffle, clearhand };
}
       
    