const { Schema } = require('mongoose');
const moment = require('moment');// import moment for date formatting

const voteSchema = new Schema(
{  
    userEmail: {
        type: String,
        required: true
      },
      userId: {
        type: Number,
        required: true
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

module.exports = voteSchema; 