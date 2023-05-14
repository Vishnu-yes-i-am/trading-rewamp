// File: controllers/exampleController.js

const exampleService = require('../services/exampleServices');

// Get all examples
const getExamples = (req, res) => {
    const examples = exampleService.getAllExamples();
    res.json(examples);
};

// Get example by ID
const getExampleById = (req, res) => {
    const { id } = req.params;
    const example = exampleService.getExampleById(id);
    res.json(example);
};

// Create example
const createExample = (req, res) => {
    const { body } = req;
    const example = exampleService.createExample(body);
    res.json(example);
};

// Update example
const updateExample = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const example = exampleService.updateExample(id, body);
    res.json(example);
};

// Delete example
const deleteExample = (req, res) => {
    const { id } = req.params;
    exampleService.deleteExample(id);
    res.sendStatus(204);
};

module.exports = {
    getExamples,
    getExampleById,
    createExample,
    updateExample,
    deleteExample,
};
