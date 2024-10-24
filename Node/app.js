const express = require("express");
const bodyparser = require("body-parser");
const user = require("./routes/userRouter");
const auth = require("./routes/authRouter");
const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use("/users", user);
app.use("/author", auth);

app.get("/", (req, res) => {
res.send("welcome");
})
app.listen(3000);