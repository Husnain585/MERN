const {models} = require("./index");

module.exports = {
    createProduct : async (body) => {
        try {
            const product = await models.products.create({...body});
            return {
                response: product,
            }
        } catch (error) {
            console.log(error)
            return{
                error: error,
            }
        }
    },
}