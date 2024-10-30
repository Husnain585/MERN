const express = require("express");
const bodyparser = require("body-parser");
const user = require("./routes/userRouter");
const auth = require("./routes/authRouter");
const crudOp = require("./routes/crudRouter");
const morgan = require("morgan");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.use("/crud", crudOp);
app.use("/users", user);
app.use("/author", auth);

app.get("/", (req, res) => {
res.send("welcome");
})
app.listen(3000);