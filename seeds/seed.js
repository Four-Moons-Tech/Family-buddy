const sequelize = require('../config/connection');
const { User, Child, Chores, Eanings } = require('../models');

const userData = require('./userData.json');
const choresData = require('./choresData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  

  process.exit(0);
};

seedDatabase();
