const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

router.post('/new-game', cardController.newGame);
router.post('/draw', cardController.draw);
router.post('/shuffle', cardController.shuffle);
router.post('/pile', cardController.addToPile);
  
module.exports = router;
