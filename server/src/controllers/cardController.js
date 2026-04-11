  const deckService = require('../services/deckService');
  
  const cardController = {
    async newGame(req, res, next) {
      try {
        const { deckCount = 1 } = req.body;
        const deck = await deckService.createDeck(deckCount);
        res.json({
          success: true,
          deckId: deck.deck_id,
          remaining: deck.remaining
        });
      } catch (error) { next(error); }
    },
  
    async draw(req, res, next) {
      try {
        const { deckId, count = 1 } = req.body;
        if (!deckId) return res.status(400).json({ error: 'Se requiere deckId' });
        const result = await deckService.drawCards(deckId, count);
        res.json({ success: true, cards: result.cards, remaining: result.remaining });
      } catch (error) { next(error); }
    },
  
    async shuffle(req, res, next) {
      try {
        const { deckId } = req.body;
        if (!deckId) return res.status(400).json({ error: 'Se requiere deckId' });
        const result = await deckService.shuffleDeck(deckId);
        res.json({ success: true, shuffled: result.shuffled, remaining: result.remaining });
      } catch (error) { next(error); }
    },
  
    async addToPile(req, res, next) {
      try {
        const { deckId, pileName, cards } = req.body;
        const result = await deckService.addToPile(deckId, pileName, cards);
        res.json({ success: true, piles: result.piles });
      } catch (error) { next(error); }
    }
  };
  
  module.exports = cardController;

