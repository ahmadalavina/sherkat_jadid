const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require("express-rate-limit");
const http = require('http');
const bodyparser = require('body-parser');
const app = express();
const passport = require('passport');
const io = require('socket.io')(9090);
//
//@author : ahmdalavi1234@gmail.com
//

module.exports = class Server {

    constructor() {
        this.StartMongooseServer()
        this.setupExpress()
        this.SetUpSocket()
        this.APIs()
        
    }


    StartMongooseServer() {
        // it is just for connectining
        console.time("Db Started in ")
        mongoose.Promise = global.Promise;
        const mongoURI = `${config.database.url}${config.database.database_name}`;
        const option = {
            user: config.database.user,
            pass: config.database.pass,
            useNewUrlParser: true,
        };

        mongoose.connect(mongoURI, option).then(function () {
            console.log("mongoose connected successfully");
        }, function (err) {
            console.log("mongoose connected failed err=> " + err);
        });

        console.timeEnd("Db Started in ")

    }

    setupExpress() {
        console.time("Server Started in ")
        const server = http.createServer(app);
        

        server.listen(config.port, () => console.log(`Listening on port ${config.port}`));
        console.timeEnd("Server Started in ")
    }



    APIs() {
        console.time("API Started in ")
        app.use(this.SetRateTime())
        app.use(bodyparser.json())
        app.use(require('App/routes/api'))
        //Routes

        console.timeEnd("API Started in ")

    }
    SetUpSocket(){

        io.on('connection',socket=>{
            console.log(socket.id)
        })
    }

    SetRateTime() {


        const limiter = rateLimit({
            windowMs: 2 * 60 * 1000, // 2 minutes
            max: 100 // limit each IP to 100 requests per windowMs
        });
        return limiter
    }
    setConfig(){
        require('App/passport/passport-local')(passport)
    }
}