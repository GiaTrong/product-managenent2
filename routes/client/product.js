const express = require("express");
const router = express.Router();

// products
const productController = require('../../controllers/client/products.controller')
router.get("/", productController.index);

router.get("/about", (req, res) => {
  res.send("Trang about");
});

router.get("/contact", (req, res) => {
  res.send("Trang contact");
});

module.exports = router;
