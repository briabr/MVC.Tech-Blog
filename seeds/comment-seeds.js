const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is wonderful!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, outstanding work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Cool! Cheers to everyone who put so much effort in this"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "million members! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "What a wonderful news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Love it!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Never seen like it!Very useful!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Cool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;