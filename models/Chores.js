const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chores extends Model {}

Chores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
   Child: {
    type: DataTypes.STRING,
    references: {
        model:'child',
        key:'id',
    }
   }
   
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chores',
  }
);

module.exports = Chores;
