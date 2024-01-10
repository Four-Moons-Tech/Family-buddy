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
    // status: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue:false,
    // },
    
   child_id: {
    type: DataTypes.INTEGER,
    references: {
        model:'child',
        key:'id',
    }
   },
    rate: {
     type: DataTypes.DECIMAL(10,2),
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

