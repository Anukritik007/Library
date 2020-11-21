const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('index'); //renders index.ejs of views
});

module.exports = router;
