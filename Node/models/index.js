const connection = require("../dbConnection");

const users = require("./definitions/users");

const models = { users };   // all table are here after the execution

// relations

const db = {};

db.connection = connection;
connection.models = models;

module.exports = { db, models };