const joi = require("joi");
const CreateUser = joi.object({
    name: joi.string().required(),
    username: joi.string().alphanum().required(),
    password: joi.string().required(),
    email: joi.string().email().required(),
});
const Update = joi.object({
    username: joi.string().alphanum().required(),
    name: joi.string(),
    email: joi.string().email(),
});
const GetDelete = joi.object({
    username: joi.string().alphanum().required(),
});
module.exports = {
     CreateMember : async (req, res, next) => {
        try{ 
           await CreateUser.validateAsync(req.body);
            next();
        }catch(error){
            return res.send({
                error: error,
            });
        }
     },
     Update : async (req, res, next) => {
        try{
           await Update.validateAsync(req.body);
            next();
        }catch(error){
            return res.send({
                error: error,
            });
        }
     },
     GetDelete : async (req, res, next) => {
        try{
           await GetDelete.validateAsync(req.query);
            next();
        }catch(error){
            return res.send({
                error: error,
            });
        }
     },
};