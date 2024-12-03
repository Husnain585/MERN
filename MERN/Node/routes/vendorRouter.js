const vendorRouter = require("express").Router();

const vendorModel = require("../models/vendorModel");
const {create} = require("../controller/vendorController");

vendorRouter.post("/create", create);
module.exports = vendorRouter;


