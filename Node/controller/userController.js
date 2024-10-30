
// const createUser = (req, res) => {
//     res.send("Controller page");
// }

// const getUser = (req, res) => {
    //     res.send("Controller page");
    // }
    
    // const updateUser = (req, res) => {
        //     res.send("Controller page");
        // }
        
        // module.exports = {createUser, getUser,  updateUser};
        
        
const { response } = require("express");
const {hash} = require("bcryptjs");

module.exports = {
    createUser : async (req, res) => {
        try{
            req.body.password = await hash(req.body.password, 10);
            return res.send({
                status: "ok",
                code: 200,
                response: req.body
            })
        }catch(error){
            return res.send({
                status: "error",
                code: 404,
                error: "Request not found", 
            })
        }
    },
    getUser: (req, res) => {
        console.log(req.query);
        return res.send("Logout page at controller page");
    },
    updateUser: (req, res) => {
        return res.send("updateUser page at controller page");
    }
};