const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    goal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'user',
        key:'id',
    }
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'child',
  }
);

module.exports = Child;

