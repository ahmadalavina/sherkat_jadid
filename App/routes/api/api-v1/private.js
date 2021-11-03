const express = require('express');
const passport = require('passport');
const questionController = require('App/http/controller/questions/questionApiController');
const questionMiddleware = require('App/http/middleware/QuestionMiddleware');
const questionValidator = require('App/http/validators/questionValidator');
const router = express.Router();

//router.post("/addquestions",questionValidator.handler(),questionMiddleware.QuestionValidator,questionController.Create)

module.exports = router;