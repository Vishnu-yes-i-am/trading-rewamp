const exampleService = require('../services/exampleServices');

// Get all examples
const startDay = (req, res) => {
    let curr_time = Date.now();

    //save in db 


    res.statusCode(200).send("Day Started");

};


module.exports = {
    startDay
};
