const express = require('express')
const app = express();
// routes
const routeClient = require('./routes/client/index')

// DOTENV
require("dotenv").config();

// PORT
const port = process.env.PORT;

// routes 
routeClient(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})