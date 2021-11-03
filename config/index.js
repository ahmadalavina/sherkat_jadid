const path = require('./path')
const database = require('./database');
const jwt = require('./jwt');
const questions = require('./questions');

module.exports = {
    database,
    path,
    jwt,
    questions,
    port : process.env.APPLICATION_PORT,
    token : process.env.ACCESS_TOKEN_SECRET,
    
};