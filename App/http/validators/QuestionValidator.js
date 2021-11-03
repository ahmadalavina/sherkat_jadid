
const { config } = require('dotenv');
const { body } = require('express-validator');
const number = config.number_of_questions
module.exports = QuestionValidator ={
 handler :  [ 
        body('question').isString(),
        body('answers').isArray().isLength(number),
        body('trueAnswer').isFloat({min: 1, max:number})
    ]

}

