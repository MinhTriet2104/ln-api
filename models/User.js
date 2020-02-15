const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default: "member"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
