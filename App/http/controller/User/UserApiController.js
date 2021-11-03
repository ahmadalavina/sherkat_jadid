const passport = require('passport');
const UserModel = require('App/models/Users');
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');

class UserController {

    async SignUp(req,res,next) {
        body('username').isEmail(),
        // password must be at least 5 chars long
        body('password').isLength({ min: 5 })
        
        try {
          await  passport.authenticate('signup',{session : false}, (error ,user, info) => {
                //console.log("signup successful 1")
                if (error) throw error;
              return  res.json({
                    message : 'Signup successful',
                    user : req.user
                })
                //console.log("signup successful 2")
    
            })
    
        } catch (error) {
            console.log(error)
        }
   
    }

    async SignIn(req,res,next){
        passport.authenticate('login',async (err,user,info)=>{
            try {
                if(err || !user){
                    const error = new Error('An error occurred')

                    return next(error)
                }
                req.login(user,{session : false}, async (error)=>{
                    if (err) return next(error)

                    const body = {_id:user._id , email:user.email}
                    const token = jwt.sign({user: body}, config.jwt.TOP_SECRET_KEY)
                    return res.json ({token:token})
                })
            } catch (error) {
                console.log("an error occured in SignIn controller ," + error)
                next(error)
            }
        })
    }

}

module.exports = new UserController()