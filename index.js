const express = require("express");
const app = express();

const authRoute = require("./routes/auth.js");

app.use("/api/uer", authRoute);

app.listen(3000, () => console.log("server up ++++"));
