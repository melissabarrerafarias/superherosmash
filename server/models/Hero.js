const { Schema, model } = require("mongoose");

const heroSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  votes: {
    type: Number,
    required: false,
    default: 0,
  },
  wins: {
    type: Number,
    required: false,
    default: 0,
  },
  losses: {
    type: Number,
    required: false,
    default: 0,
  },
});

const Hero = model("Hero", heroSchema);
module.exports = Hero;
