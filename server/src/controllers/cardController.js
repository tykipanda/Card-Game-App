const deckService = require('../services/deckService');

const cardController = {
    async newGame(req, res, next) {
        try {
            const { deckCount = 1 } = req.body;
            const deck = await deckService.createDeck(deckCount);
            res.json({
                success: true,
                deckId: deck.deck_id,
                remainiing: deck.remaining,
            });
        } catch (error) {next(error); }
    },


    async draw(req, res, next) {
        try {
            const { deckId, count =1 } = req.body;
            if (!deckId) {return res.status(400).json({ error: 'Se requiere deckId' });
            const result = await deckService.drawCards(deckId, count);
            res.json({ success: true, cards: result.cards, remaining: result.remaining });
        } catch (error) {next(error); }
    }}, 

    async shuffle(req, res, next) {
        try {
            const { deckId } = req.body;
            if (!deckId) {return res.status(400).json({ error: 'Se requiere deckId' });
            const result = await deckService.shuffleDeck(deckId);
            res.json({ success: true, deckId: result.deck_id, remaining: result.remaining });
        } catch (error) {next(error); }
    },
    


};