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
   child_id: {
    type: DataTypes.STRING,
    references: {
        model:'child',
        key:'id',
    }
   },

   rate: {
    type: DataTypes.STRING,
    
   }
  //  SELECT rate,  SUM (rate) AS total_earnings
  //  FROM myapp_chores GROUP BY rate
   
    
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
