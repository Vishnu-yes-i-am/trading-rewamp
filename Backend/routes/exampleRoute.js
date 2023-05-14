// File: routes/exampleRoutes.js

const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define routes
router.get('/', exampleController.getExamples);
router.get('/:id', exampleController.getExampleById);
router.post('/', exampleController.createExample);
router.put('/:id', exampleController.updateExample);
router.delete('/:id', exampleController.deleteExample);

module.exports = router;
