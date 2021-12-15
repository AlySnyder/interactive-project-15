const sequelize = require('../config/connection');
const seedCovid = require('./covidData');
const seedStates = require('./statesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCovid();
  
  await seedStates();

  process.exit(0);
};

seedAll();
