const express = require("express");
const user = require("./routes/user");
const auth = require("./routes/admin");
const app = express();
app.use("/users", user);
app.use("/author", auth);
app.get("/", (req, res) => {
res.send("welcome");
})
app.listen(3000);