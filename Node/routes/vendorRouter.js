const routes = require("express").Router();

const vendorModel = require("../models/vendorModel");
const {create} = require("../controller/vendorController");

routes.post("/create", create);
module.exports = routes;


