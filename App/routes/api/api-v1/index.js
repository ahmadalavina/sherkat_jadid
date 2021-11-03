const express = require('express'); //commit01
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')

const forEveryOne = require('./public');
const forUser = require('./private');

router.use(forEveryOne);
//router.use(forUser,passport.authenticate('jwt', { session: false }));



module.exports = router;