const User = require('./User');
const Child = require('./Child');
const Chores = require('./Chores');

User.hasMany(Child, {
  foreignKey: 'user_id',
  
});

Child.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Child.hasMany(Chores, {
  foreignKey: 'child_id',
});

Chores.belongsTo(Child, {
  foreignKey: 'child_id',
  onDelete: 'CASCADE'
});





module.exports = { User, Child, Chores };
