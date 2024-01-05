const User = require('./user');
const Child = require('./child');
const Chores = require('./chores');
const Earnings = require('./earnings');

User.hasMany(Child, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Child.belongsTo(User, {
  foreignKey: 'user_id'
});

Child.hasMany(Chores, {
  foreignKey: 'child_id',
  onDelete: 'CASCADE'
});

Chores.belongsTo(Child, {
  foreignKey: 'child_id',
  onDelete: 'CASCADE'
});

Earnings.hasMany(Chores, {
  foreignKey: 'earnings_id',
  onDelete: 'CASCADE'
})

Chores.belongsTo(Earnings, { 
    foreignKey: 'earnings_id',
 })

 Child.hasMany(Earnings,{
  foreignKey: 'child_id',
  onDelete: 'CASCADE'
 } )



Earnings.belongsTo(Child, {
  foreignKey: 'child_id',
  onDelete: 'CASCADE'

}
)

module.exports = { User, Child, Chores, Earnings };
