const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WinsSchema = new Schema({
    FirstParticipant: {
        type: String,
        required: true,
    },
    SecondParticipant: {
        type: String,
        required: true
    },
    winner: {
        type: String,
        required: true,
    }
});



module.exports = mongoose.model('questions', WinsSchema);;