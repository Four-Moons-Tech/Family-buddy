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

  for (const project of choresData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
