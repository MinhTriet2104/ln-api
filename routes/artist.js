const express = require("express");
const router = express.Router();
const _string = require("lodash/string");
const Artist = require("../models/Artist");

router.get("/", async (req, res) => {
  try {
    const artists = await Artist.find({});
    res.json(artists);
  } catch {
    res.status(400).send("Can't get data");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    res.json(artist);
  } catch (err) {
    res.status(400).send("Can't get data\n" + err);
  }
});

router.post("/", (req, res) => {
  const artist = new Artist({
    name: upperCaseName(req.body.name)
  });
  artist
    .save()
    .then(() => res.status(201).send("Created Successfully"))
    .catch(err => res.status(400).send("Created Fail\n" + err));
});

router.delete("/:id", async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    await artist.remove();
    res.send("Deleted Successfully");
  } catch (err) {
    res.status(400).send("Deleted Fail\n" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    artist.name = upperCaseName(req.body.name) || artist.name;
    await artist.save();
    res.status(200).send("Updated Successfully");
  } catch (err) {
    res.status(400).send("Updated Fail\n" + err);
  }
});

function upperCaseName(str) {
  return _string.startCase(_string.toLower(str));
}

module.exports = router;
