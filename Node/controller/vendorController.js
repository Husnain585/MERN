const {createVendor} = require("../models/vendorModel");

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