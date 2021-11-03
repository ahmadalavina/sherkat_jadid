
const questionModel = require('App/models/question');
const Status = require('App/http/validators/statusCodes');

class questionApiController {

    async Create(req, res) {
        try {

            questionModel.insertMany([req.body], (error, docs) => {
                if (error) return Status.badRequest()
                return Status.Create()
            })
        } catch (error) {
            console.log("An error occurred while creating in questionApiController ," + error)
            return Status.badRequest()
        }


    }

    async Get(req, res) {
        try {

            var data = await questionModel.find({});
            return res.json(data)
        } catch (error) {
            console.log("An error occurred while Get in questionApiController ," + error)
            return Status.badRequest()
        }
    }
    //TODO : we need a rout for our team
    async 



}

module.exports = new questionApiController()