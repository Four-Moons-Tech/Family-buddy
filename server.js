const path = require('path');
const express = require('express');

const session = require('express-session');

//const routes = require('./controllers');
//console.log('routes',routes)
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// temporary
const User = require('./models/User.js')
const Chores = require('./models/Chores.js')
//

const sequelize = require('./config/connection');

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
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./controllers'));
sequelize.sync({ force: false }).then(() => {
  
  // User.findAll({}).then(x => console.log(x))
  // Chores.findAll({}).then(x => console.log(x))
  //
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});


