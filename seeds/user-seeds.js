const { User } = require('../models');

const userData = [
    {
        username: "garima",
        twitter: "garimab",
        github: "garimab",
        email: "garima_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "ahmed_b",
        twitter: "ahmedb",
        github: "ahmedb",
        email: "ahmed_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "max_c",
        twitter: "max",
        github: "max",
        email: "max_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "daniel_n",
        twitter: "daniel",
        github: "daniel",
        email: "daniel_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "karishma_r",
        twitter: "karishma23",
        github: "karishma23",
        email: "karishma_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "dena",
        twitter: "dena_w",
        github: "dena",
        email: "dena@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;