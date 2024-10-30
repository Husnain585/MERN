const joi = require("joi");
const create = joi.object({
    name: joi.string().required(),
    username: joi.string().alphanum().required(),
    password: joi.string().min(3).max(18).required()
});
const update = joi.object({
    name: joi.string().required(),
    username: joi.string().alphanum().required(),
});
const getDelete = joi.object({
    username: joi.string().alphanum().required(),
});
module.exports = {
     Create : async (req, res, next) => {
        try{ 
           await Create.validateAsync(req.body);
            next();
        }catch(error){
            return res.send({
                error: error,
            });
        }
     },
     Update : async (req, res, next) => {
        try{
           await this.Update.validateAsync(req.body);
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