const express = require ('express');
const router = express.Router();
const ctrl = require('../controllers/scryfallController');

router.get('/search', ctrl.search);
router.get('/named', ctrl.getByName);
router.get('/random', ctrl.getRamdom);
router.get('/card/:id', ctrl.getById);
router.get('/autocomplete', ctrl.autocomplete);
router.get('/sets', ctrl.getSets);

module.exports = router;