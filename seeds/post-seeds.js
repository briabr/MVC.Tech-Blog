const { Post } = require('../models');

const postData = [
    {
        title: "Todos goes public!",
        post_content: "Todos will allow you to organize your personal to-do list items",
        user_id: 3
    },
    {
        title: "NPO DO reaches 2 million subscribers!",
        post_content: "The NPODO African charity organization has received funding to build a new online catalog",
        user_id: 1
    },
    {
        title: "Busy Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day.",
        user_id: 2

    },
    {
        title: "Tech Blog has been launched!",
        post_content: "CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;