const userModel = require("express").Router();
const {Create, Update, GetDelete} = require("../validations/userValidator")
const {
    create,
    getAll,
    update,
    getUser,
    deleteUser,
} = require("../controller/userController")

const {createValidator} = require("../validations/userValidator");


userModel.get("/get-all",  getAll);
userModel.get("/get", getUser);
userModel.post("/create", Create, create);
userModel.patch("/update", Update,update);
userModel.get("/delete", GetDelete, deleteUser);
module.exports = userModel;


