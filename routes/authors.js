const express = require("express");
const Author = require("../models/author");
const router = express.Router();

//All authors routes
router.get("/", (req, res) => {
  res.render("authors/index"); // renders index.ejs of authors view
});

//New Author route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() }); //gives an object that we can use in ejs
});

//Create the author
router.post("/", (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  author.save((err, newAuthor) => {
    if (err) {
      res.render("authors/new", {
        author: author,
        errorMessage: "Error creating author"
      });
    } else {
      res.redirect("authors");
    }
  });
});

module.exports = router;
