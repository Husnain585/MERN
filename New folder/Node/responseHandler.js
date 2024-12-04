const { response } = require("express");

module.exports = (res, data) => {
    try {
        return res.send({
            code: 200,
            status: "Working",
            response: data,
        });   
    } catch (error) {
        return res.send({
            code: 400,
            status: "not Working",
            error: error,
        });        
    }
}