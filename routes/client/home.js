const express = require("express");
const router = express.Router();

// HOME
const homeController = require('../../controllers/client/home.controller')
router.get("/", homeController.index);

module.exports = router;
