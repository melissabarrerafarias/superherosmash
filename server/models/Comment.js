const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');// import reply schema for replies array 
const moment = require('moment');// import moment for date format

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
        },
        replies: [replySchema]
    },
    {
        toJSON: {
            getters: true, 
            virtuals: true
        }
    }
);

commentSchema.virtual('repliesTotal').get(function () {//amount of replies a comment/discussion gets 
    return this.replies.length;
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;