const {createVendor} = require("../models/vendorModel");
const responseHandler = require("../responseHandler");

module.exports = {
    create: async (req, res) => {
        try {
            const response = await createVendor(req.body);
            return responseHandler(res, response);
        } catch (error) {
            return responseHandler(res, { response: error });
        }
    },
};