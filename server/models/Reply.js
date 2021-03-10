const { Schema } = require('mongoose');
const moment = require('moment');// import moment for date formatting

const replySchema = new Schema(
  {
    replyBody: {
      type: String,
      required: true,
      maxlength: 300
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).format('MM-DD-YYYY')
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = replySchema; 