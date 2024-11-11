const connection = require("../dbConnection");

const users = require("./definitions/users");

const customer = require("./definitions/customer");

const admin = require("./definitions/admin");
const cart = require("./definitions/cart");
const cartItem = require("./definitions/cartItem");
const products = require("./definitions/products");
const vendor  = require("./definitions/vendor");



const models = { users, customer, admin, cart, cartItem, products, vendor };   // all table are here after the execution

// relations



const db = {};

db.connection = connection;
connection.models = models;

module.exports = { db, models };