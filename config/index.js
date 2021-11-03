const path = require('./path')
const database = require('./database');
const jwt = require('./jwt');


module.exports = {
    database,
    path,
    jwt,
    port : process.env.APPLICATION_PORT,
    token : process.env.ACCESS_TOKEN_SECRET,
    number_of_questions : process.env.NUMBER_OF_ANSWER
    
};