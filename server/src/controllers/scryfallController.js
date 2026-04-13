const scryfallService = require('../services/scryfallService');

const scryfallController = {
    //Get api/scryfall/search?q=...&page=
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
                    type_line: card.type_line,
                    oracle_text: card.oracle_text,
                    set_name: card.set_name,
                    rarity: card.rarity,
                    image: card.image_uris?.normal || card.card_faces?.[0]?.image_uris?.normal,
                    image_small: card.image_uris?.small || card.card_faces?.[0]?.image_uris?.small,
                    prices: card.prices,
                    legalities: card.legalities,
                    artist: card.artist,
                    colors: card.colors,
                    cmc: card.cmc,
                    power: card.power,
                    toughness: card.toughness,
                     scryfall_uri: card.scryfall_uri
          }))
        });
    } catch (error){
        if (error.response?.status === 404) {
            return res.json({ success: true, total_cards: 0, has_more: false, cards: []});
        }
        next(error);
    }
    },

    //GET /api/scryfall/name?name=...&fuzzy=true
    async getByName(req, res, next) {
        try {
            const { name, fuzzy } = req.query;
            if (!name) return res.status(400).json({error: 'Se requiere parámetro name'});
            const card = await scryfallService.getCardById(name, fuzzy === 'true');
            res.json({ success: true, card });
        } catch (error) {
            if (error.response?.status === 404) {
                return res.status (404).json({ error: 'Carta no encontrada'});
            }
            next(error);
        }
    },

    //GET /api

}