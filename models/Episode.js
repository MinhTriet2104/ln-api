const mongoose = require("mongoose");

const EpisodeSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Chapter"
  }
});

module.exports = mongoose.model("Episode", EpisodeSchema);
