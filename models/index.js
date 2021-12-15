const User = require('./User');
const Covid = require('./Covid');
const States = require('./States');

/*Covid.belongsTo(States, {
    foreignKey: "covid_data_id",
    onDelete: "CASCADE"
  });

  States.hasMany(Covid, {
    foreignKey: "covid_data_id",
  });
  */

module.exports = { User, Covid, States };
