const mongoose = require('mongoose');

// Creating the schema
const schema = new mongoose.Schema({
    text: {type: String, required: [true, 'Text is required']},
    date: { type: Date, default: Date.now }
});

// Creating the model
const List = mongoose.model('List', schema);

module.exports = List ;