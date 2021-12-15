const { Covid } = require('../models');

const covidData = [
  {
    state: 'Alabama',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'Alaska',
    population: '731545',
    cases: '148380',
    deaths: '857'
  }
  
];

const seedCovid = () => Covid.bulkCreate(covidData);

module.exports = seedCovid;
