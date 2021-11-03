
const { config } = require('dotenv');
const { body } = require('express-validator');

class QuestionValidator {

    handler(req,res,next){
        return [ 
            body('question').isString(),
            body('answers').isArray().isLength(config.questions.number_of_questions),
            body('trueAnswer').isFloat({min: 1, max:config.questions.number_of_questions})
        ]
        next()
    }

}

module.exports = QuestionValidator();