const mongoose = require("mongoose");

const typePlaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TypePlace", typePlaceSchema);
