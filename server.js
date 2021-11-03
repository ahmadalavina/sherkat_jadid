require('app-module-path').addPath(__dirname)
require('dotenv').config();
const Server = require('./App');
global.config = require('./config');


new Server();
