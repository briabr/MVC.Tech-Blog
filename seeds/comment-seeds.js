const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This is wonderful!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Wow, outstanding work!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Cool!"
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: 'Fantastic!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "wonderful!"
    },
    {
        user_id: 6,
        post_id: 7,
        comment_text: "Love it!"
    },
    {
        user_id: 7,
        post_id: 8,
        comment_text: "Very useful!"
    },
    {
        user_id: 8,
        post_id: 9,
        comment_text: "Cool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;