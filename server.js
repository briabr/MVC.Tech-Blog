// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const helpers = require('./utils/helpers')
const routes = require('./controllers')
const hbs = exphbs.create({helpers});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes)


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
