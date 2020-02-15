const mongoose = require("mongoose");

const ChapterSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  episodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Episode"
    }
  ],
  content: {
    type: String
  }
});

module.exports = mongoose.model("Chapter", ChapterSchema);
