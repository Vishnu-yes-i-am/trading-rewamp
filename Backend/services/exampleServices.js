// File: services/exampleService.js

const examples = [];

// Get all examples
const getAllExamples = () => examples;

// Get example by ID
const getExampleById = (id) => examples.find((example) => example.id === id);

// Create example
const createExample = (example) => {
    examples.push(example);
    return example;
};

// Update example
const updateExample = (id, newData) => {
    const exampleIndex = examples.findIndex((example) => example.id === id);
    if (exampleIndex !== -1) {
        examples[exampleIndex] = { ...examples[exampleIndex], ...newData };
        return examples[exampleIndex];
    }
    return null;
};

// Delete example
const deleteExample = (id) => {
    const exampleIndex = examples.findIndex((example) => example.id === id);
    if (exampleIndex !== -1) {
        examples.splice(exampleIndex, 1);
    }
};

module.exports = {
    getAllExamples,
    getExampleById,
    createExample,
    updateExample,
    deleteExample,
};
