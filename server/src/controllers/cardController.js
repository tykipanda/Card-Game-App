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

    