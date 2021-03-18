const { Schema, model } = require("mongoose");
const voteSchema = require('../models/Vote'); 

const heroSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: Number,
    required: false,
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
  voteObjs: [voteSchema],
});

const Hero = model("Hero", heroSchema);
module.exports = Hero;
