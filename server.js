const path = require('path');
const express = require('express');
//console.log('express', express)
const session = require('express-session');
// console.log('session',session)
//const routes = require('./controllers');
//console.log('routes',routes)
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;



const sequelize = require('./config/connection');
console.log('sequelize',sequelize)
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./controllers'));
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});
// const express= require('express');
// const PORT = process.env.PORT || 3001;

// const app=express();

// app.listen(PORT, () => console.log('Now listening'));

