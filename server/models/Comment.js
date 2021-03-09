const { Schema, model } = require('mongoose');
const moment = require('moment');

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: 'Looks like you forgot to add words!',
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MM-DD-YYYY')
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;