const { Post } = require('../models');

const postData = [
    {
        title: "Todomaster goes public!",
        post_content: "Todomaster will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 3
    },
    {
        title: "NPO DO reaches 1 million subscribers!",
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
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;