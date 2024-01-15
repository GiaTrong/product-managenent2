const express = require("express");
const app = express();
// routes
const routeClient = require("./routes/client/index");
const roteAdmin = require('./routes/admin/index')
// pug
const pug = require("pug");
// database
const database = require("./config/database");
// systemConfig
const systemConfig = require('./config/system')
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
roteAdmin(app);

//  APP VARIABLES LOCALS => thiết lập biến toàn cục cho TẤT CẢ FILE BUG của bạn
app.locals.prefixAdmin = systemConfig.prefixAdmin;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
