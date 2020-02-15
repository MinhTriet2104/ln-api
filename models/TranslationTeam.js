const mongoose = require("mongoose");

const TranslationTeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  founder: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  members: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      }
    ],
    required: true
  }
});

module.exports = mongoose.model("TranslationTeam", TranslationTeamSchema);
