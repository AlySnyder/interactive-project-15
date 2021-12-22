const User = require('./User');
const Covid = require('./Covid');
const States = require('./States');
const Favorites = require('./Favorites');

States.belongsTo(Covid, {
  foreignKey: "covid_data_id",
  onDelete: "CASCADE",
});

Covid.hasOne(States, {
  foreignKey: "covid_data_id",
});


User.hasMany(Favorites, {
  foreignKey: 'user_id'
});

Favorites.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = { User, Covid, States, Favorites };
