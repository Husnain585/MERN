const { createProduct} = require("../models/productModel");
const responseHandler = require("../responseHandler");

module.exports = {
    create: async (req, res) => {
        try {
            console.log("check");
            const response = await createProduct(req.body);
            console.log("check");
            return responseHandler(res, response);
        } catch (error) {
            return responseHandler(res, { response: error });
        }
    },
};