const express = require('express')
const app = express();

// DOTENV
require("dotenv").config();

// PORT
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})