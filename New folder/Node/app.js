const express = require("express");
const bodyparser = require("body-parser");
const userModule = require("./model/user");

const app = express();
app.use("/users", userModule);

app.use("/", (req,res) => {
    res.send("App Page");
})


app.listen(3000);
