const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Trang san pham");
});

router.get("/about", (req, res) => {
  res.send("Trang about");
});

router.get("/contact", (req, res) => {
  res.send("Trang contact");
});

module.exports = router;
