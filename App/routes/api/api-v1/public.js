const express = require('express'); //commit01
const router = express.Router();

const UserController = require('App/http/controller/User/UserApiController');
const SignupMiddleware = require('App/http/middleware/SignupMiddleware');
const SignupValidator = require('App/http/validators/SignupValidator');

router.post('/signup',SignupValidator.handle,SignupMiddleware.SignUp,UserController.SignUp)
router.get('/signin',UserController.SignIn)

module.exports = router