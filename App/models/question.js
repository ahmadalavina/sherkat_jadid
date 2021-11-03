const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
    questions: {
        type: String,
        required: true,
    },
    answers: {
        type: Array,
        required: true
    },
    trueAnswer: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('questions', QuestionsSchema);;