const routes = require("express").Router();

const productModel = require("../models/productModel");
const {create } = require("../controller/productController");


routes.post("/create", create);
module.exports = routes;




