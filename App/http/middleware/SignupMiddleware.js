
const { body, validationResult } = require('express-validator');

class SignupMiddleware {


    SignUp(req, res, next) {

            // Finds the validation errors in this request and wraps them in an object with handy functions
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        
    }


}

module.exports = new SignupMiddleware();