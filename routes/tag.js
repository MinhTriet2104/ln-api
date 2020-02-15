const express = require("express");
const router = express.Router();
const Tag = require("../models/Tag");

router.get("/", async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.json(tags);
  } catch {
    res.status(400).send("Can't get data");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    res.json(tag);
  } catch (err) {
    res.status(400).send("Can't get data\n" + err);
  }
});

router.post("/", (req, res) => {
  const tag = new Tag({
    name: req.body.name.toLowerCase(),
    description: req.body.description
  });
  tag
    .save()
    .then(() => res.status(201).send("Created Successfully"))
    .catch(err => res.status(400).send("Created Fail\n" + err));
});

router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    await tag.remove();
    res.send("Deleted Successfully");
  } catch (err) {
    res.status(400).send("Deleted Fail\n" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    tag.name = req.body.name.toLowerCase() || tag.name;
    tag.description = req.body.description || tag.description;
    await tag.save();
    res.status(200).send("Updated Successfully");
  } catch (err) {
    res.status(400).send("Updated Fail\n" + err);
  }
});

module.exports = router;
