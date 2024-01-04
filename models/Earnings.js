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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chores',
  }
);

module.exports = Earnings;

