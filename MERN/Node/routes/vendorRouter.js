const routes = require("express").Router();

const {create, } = require("../controller/vendorController");

routes.post("/create", create);
module.exports = routes;


