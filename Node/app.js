const express = require("express");
const bodyparser = require("body-parser");
const userModel = require("./routes/userRouter");
const auth = require("./routes/authRouter");
const morgan = require("morgan");
const {db} = require("./models/index");
const connection = require("./dbConnection");
const userModule = require("./routes/userRouter");
const vendorRouter = require("./routes/vendorRouter");


const app = express();
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use("/users", userModel);
app.use("/author", auth);
app.use("/vendor", vendorRouter);
app.get("/", (req, res) => {
res.send("welcome");
});

db.connection
    .sync({alter: true, logging: false, force: true})
    .then(() => 
        {
    app.listen(3000);
}).catch((error) =>{
    console.log(error);
    console.log("unable to connect");
})