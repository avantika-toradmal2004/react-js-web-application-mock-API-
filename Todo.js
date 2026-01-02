const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
