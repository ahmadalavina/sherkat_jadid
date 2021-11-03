
const { body } = require('express-validator');

class SignupValidator {

    handel(req,res,next){
        return [ 
            body('username').isEmail(),
            // password must be at least 5 chars long
            body('password').isLength({ min: 5 }),
        ]
    }
}

module.exports = new SignupValidator();