// File: routes/exampleRoutes.js

const express = require('express');
const router = express.Router();
const clockController = require('../controllers/clockController');
const buyingController = require('../controllers/buyingController')
// Define routes
router.get('/startDay', clockController.startDay);
router.get('/buyingOffer', buyingController.getBuyingOffer)
// router.get('/:id', exampleController.getExampleById);
// router.post('/', exampleController.createExample);
// router.put('/:id', exampleController.updateExample);
// router.delete('/:id', exampleController.deleteExample);

module.exports = router;
