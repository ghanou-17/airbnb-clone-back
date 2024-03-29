const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  types: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypePlace",
    required: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pricing: {
    perDay: Number,
  },
  images: [String], //tableau de string
  capacity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    city: String,
    street: String,
    zipCode: {
      type: Number,
      maxLength: 5,
      minLength: 5,
    },
    gps: {
      lat: Number,
      long: Number,
    },
  },
});

module.exports = mongoose.model("Place", placeSchema);
