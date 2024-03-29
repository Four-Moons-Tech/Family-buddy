
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  console.log('Using JAWS')
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log('Using LOCAL')
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false
    }
  );
}

module.exports = sequelize;



