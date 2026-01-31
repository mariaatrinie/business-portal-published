const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Business", businessSchema);
