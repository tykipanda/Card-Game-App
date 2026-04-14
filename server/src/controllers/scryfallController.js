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

    //GET /api/scryfall/random?q=...
    async getRamdom (req, res, next) {
        try {
            const { q } = req.query;
            const card = await scryfallService.getRandomCard( q || null);
            res.json({success: true,card });
        } catch (error) { next(error); }
    },
    
    // GET /api/scryfall/card/:id
    async getById(req, res, next) {
        try {
            const card = await scryfallService.getCardById(req.params.id);
            res.json({ success: true, card });
        } catch (error) {
            if (error.response?.status === 404) {
                return res.status (404).json ({ error: 'Carta no encontrada'});
            }
            next (error);
        }
    },

    // GET /api/scryfall/autocomplete?q=...
    async autocomplete (req, res, next) {
        try {
            const { q } = req.query;
            if (!q) return res.status(400).json ({ error: 'Se requiere parámetro q'});
            const result = await scryfallService.autocomplete(q);
            res.json({ success: true, suggestions: result.data });
        } catch (error) { next (error); }
        },

    // GET /api/scryfall/sets
    async getSets(req, res, next) {
      try { 
        const result = await scryfallService.getSets();
        res.json({
          success: true,
          sets: result.data.map(s => ({
            code: s.code, name: s.name,
            released_at: s.released_at,
            set_type: s.set_type,
            card_count: s.card_count,
            icon_svg_uri: s.icon_svg_uri
          }))
        });
      } catch (error) { next(error); }
    }
};





