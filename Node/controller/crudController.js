const responseHandler = require("../responseHandler");
const errorHandler = require("../errorHandler");
module.exports = {
    create: (req, res) => {
        try{
            return responseHandler(res, req.body);
        }catch(error) {
            return errorHandler(res, error);
        }
    },
    get: (req, res) => {
        console.log(res.data);
        try{
            return responseHandler(res, req.query);
        }catch(error) {
            return errorHandler(res, error);
        }
    },
    update: (req, res) => {
        try{
            return responseHandler(res, req.body);
        }catch(error) {
            return errorHandler(res, error);
        }
    },
    deleteUser: (req, res) => {
        try{
            return  responseHandler(res, req.query);
        }catch(error) {
            return errorHandler(res, error);
        }
    },
};