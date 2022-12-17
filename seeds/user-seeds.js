const { User } = require('../models');

const userData = [
    {
        username: "garima",
        email: "garima_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "ahmed_b",
        email: "ahmed_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "max_c",
        email: "max_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "daniel_n",
        email: "daniel_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "karishma_r",
        email: "karishma_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "dena",
        email: "dena@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;