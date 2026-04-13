const scryfallService = require('../services/scryfallService');

const scryfallController = {
    //Ger api/scryfall/search?q=...&page=
    async search(req, res, next) {
        try {
            const { q, page=1 } = req.query;
            if (!q) return res.status(400).json({ error: 'Se requiere el parámetro  "q"' });
            const result = await scryfallService.searchCards(q, page);
            res.json({
                success: true,
                total_cards: result.total_cards,
                has_more: result.has_more,
                card: result.data.map(card => ({
                    id: card.id,
                    mana_cost: card.mana_cost,
                    
            }