const sequelize = require('../config/connection');
const seedCovid2020 = require('./covid2020Data');
const seedCovid2021 = require('./covid2021Data');
const seedStates = require('./statesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCovid2020();

  await seedCovid2021();
  
  await seedStates();

  process.exit(0);
};

seedAll();
