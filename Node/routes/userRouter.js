const userModule = require("express").Router();
const {
    getUser,
    createUser,
    updateUser
} = require("../controller/userController")


userModule.get("/getUser", getUser);
userModule.get("/createUser", createUser);
userModule.get("/createUser",  updateUser);
module.exports = userModule;


