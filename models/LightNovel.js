const mongoose = require("mongoose");

const LNSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    tags: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tag"
        }
      ],
      required: true
    },
    chapters: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Chapter"
        }
      ]
    },
    coverImage: {
      type: String,
      required: true,
      default: "https://i.imgur.com/Q0SB2LY.jpg"
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Author"
    },
    translationTeam: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "TranslationTeam"
        }
      ]
    },
    status: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("LightNovel", LNSchema);
