const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Earnings extends Model {}

Earnings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'earning',
  }
);


module.exports = Earnings;

