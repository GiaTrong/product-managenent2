const express = require("express");
const app = express();
// routes
const routeClient = require("./routes/client/index");
// pug
const pug = require("pug");
// database
const database = require("./config/database");
// DOTENV
require("dotenv").config();

// PORT
const port = process.env.PORT;

// database
database.connect();

//pug
app.set("views", "./views");
app.set("view engine", "pug");

// PUBLIC
app.use(express.static("public"));

// routes
routeClient(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
