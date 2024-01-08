const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Trang chu")
});

module.exports = router;
