const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoModel = require("./Models/todos");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("localhost:127.0.0.1:27017/test");

app.post("/", (req, res) => {
    const task = req.body.task;
    todoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(3000);