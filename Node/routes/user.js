const userRoutes = require("express").Router();
userRoutes.get("/get-all-user", (req, res) => {
    res.send("All Users in getallUsers");
})

userRoutes.get("/create", (req, res) => {
    res.send("All Users");
})

module.exports = userRoutes;

