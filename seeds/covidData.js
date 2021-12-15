const { Covid } = require('../models');

const covidData = [
  {
    state: 'AL',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'AK',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'AZ',
    population: '7278717',
    cases: '1320748',
    deaths: '23243'
  },
  {
    state: 'AR',
    population: '3017804',
    cases: '539483',
    deaths: '8880'
  },
  {
    state: 'CA',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'CO',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'CT',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'DE',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'FL',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'GA',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'HI',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'ID',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'IL',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'IN',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'IA',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'KS',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'KY',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'LA',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'ME',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'MD',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'MA',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'MI',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'MN',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'MS',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'MO',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'MT',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'NE',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'NV',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'NH',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'NJ',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'NM',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'NY',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'NC',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'ND',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'OH',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'OK',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'OR',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'PA',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'RI',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'SC',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'SD',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'TN',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'TX',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'UT',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'VT',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'VA',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'WA',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'WV',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state: 'WI',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state: 'WY',
    population: '731545',
    cases: '148380',
    deaths: '857'
  }
  
  
];

const seedCovid = () => Covid.bulkCreate(covidData);

module.exports = seedCovid;
