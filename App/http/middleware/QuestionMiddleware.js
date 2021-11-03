
const { validationResult } = require('express-validator');

class QuestionValidator {

    QuestionValidator(req, res, next) {

        const errors = validationResult(req);
        var length = Object.keys(req.body).length
        if (length !== 3) return res.status(400).json({ errors: "your value is invalid" });
        if (!errors.isEmpty()) return res.status(400).json({ errors: "you Should have 4 answers" });
        next();
    }


}

module.exports = new QuestionValidator();