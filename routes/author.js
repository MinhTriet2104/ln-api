const express = require("express");
const router = express.Router();
const _string = require("lodash/string");
const Author = require("../models/Author");

router.get("/", async (req, res) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
  } catch {
    res.status(400).send("Can't get data");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.json(author);
  } catch (err) {
    res.status(400).send("Can't get data\n" + err);
  }
});

router.post("/", (req, res) => {
  const author = new Author({
    name: upperCaseName(req.body.name)
  });
  author
    .save()
    .then(() => res.status(201).send("Created Successfully"))
    .catch(err => res.status(400).send("Created Fail\n" + err));
});

router.delete("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    await author.remove();
    res.send("Deleted Successfully");
  } catch (err) {
    res.status(400).send("Deleted Fail\n" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    author.name = upperCaseName(req.body.name) || author.name;
    await author.save();
    res.status(200).send("Updated Successfully");
  } catch (err) {
    res.status(400).send("Updated Fail\n" + err);
  }
});

function upperCaseName(str) {
  return _string.startCase(_string.toLower(str));
}

module.exports = router;
