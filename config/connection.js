const Sequelize = require('sequelize');
//require('dotenv').config();

const sequelize = new Sequelize(
  'chores_db',
  'root',
  'root',
  // process.env.chores_db,
  // process.env.root,
  //process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;

