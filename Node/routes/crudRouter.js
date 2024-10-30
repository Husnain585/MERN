const routes = require("express").Router();
const {Create, Update, GetDelete} = require("../validations/userValidator");
const {create, 
    update, 
    deleteUser, 
    get
} = require("../controller/crudController");

routes.post("/create", Create, create);
routes.patch("/update", Update, update);
routes.get("/get", GetDelete, get);
routes.get("/delete", GetDelete, deleteUser);

module.exports = routes;