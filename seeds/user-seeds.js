const { User } = require('../models');

const userData = [
  {
    username: "",
    email: "",
    password: ""
  },
  {
    username: "",
    email: "",
    password: ""
  },
  {
    username: "",
    email: "",
    password: ""
  },
  {
    username: "",
    email: "",
    password: ""
  },
  {
    username: "briabr",
    email: "bria.filali@gmail.com",
    password: "passwordbriaBr"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;