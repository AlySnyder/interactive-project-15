const User = require('./User');
const Covid = require('./Covid');
const States = require('./States');

States.belongsTo(Covid, {
  foreignKey: "covid_data_id",
  onDelete: "CASCADE",
});

Covid.hasOne(States, {
  foreignKey: "covid_data_id",
});

module.exports = { User, Covid, States };
