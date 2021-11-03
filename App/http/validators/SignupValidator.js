
const { body } = require('express-validator');

module.exports =  SignupValidator ={

    handel:
          [ 
            body('username').isEmail(),
            // password must be at least 5 chars long
            body('password').isLength({ min: 5 }),
        ]
        
    
}

// module.exports = new SignupValidator();