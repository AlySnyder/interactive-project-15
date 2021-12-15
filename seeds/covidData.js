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
    population: '39512223',
    cases: '5046435',
    deaths: '75676'
  },
  {
    state: 'CO',
    population: '5758736',
    cases: '860004',
    deaths: '10018'
  },
  {
    state: 'CT',
    population: '3565287',
    cases: '450315',
    deaths: '8946'
  },
  {
    state: 'DE',
    population: '973764',
    cases: '161650',
    deaths: '2225'
  },
  {
    state: 'FL',
    population: '21477737',
    cases: '3764368',
    deaths: '62073'
  },
  {
    state: 'GA',
    population: '10617423',
    cases: '1683676',
    deaths: '30882'
  },
  {
    state: 'HI',
    population: '1415872',
    cases: '89593',
    deaths: '1058'
  },
  {
    state: 'ID',
    population: '1787065',
    cases: '312591',
    deaths: '4049'
  },
  {
    state: 'IL',
    population: '12671821',
    cases: '1911649',
    deaths: '29985'
  },
  {
    state: 'IN',
    population: '6732219',
    cases: '1166283',
    deaths: '18176'
  },
  {
    state: 'IA',
    population: '3155070',
    cases: '593508',
    deaths: '7550'
  },
  {
    state: 'KS',
    population: '2913314',
    cases: '489354',
    deaths: '6875'
  },
  {
    state: 'KY',
    population: '4467673',
    cases: '817818',
    deaths: '11676'
  },
  {
    state: 'LA',
    population: '4648794',
    cases: '777696',
    deaths: '14897'
  },
  {
    state: 'ME',
    population: '1344212',
    cases: '131380',
    deaths: '1376'
  },
  {
    state: 'MD',
    population: '6045680',
    cases: '592679',
    deaths: '11255'
  },
  {
    state: 'MA',
    population: '6892503',
    cases: '985946',
    deaths: '19725'
  },
  {
    state: 'MI',
    population: '9986857',
    cases: '1585297',
    deaths: '27080'
  },
  {
    state: 'MN',
    population: '5639632',
    cases: '959989',
    deaths: '10142'
  },
  {
    state: 'MS',
    population: '2976149',
    cases: '520834',
    deaths: '10347'
  },
  {
    state: 'MO',
    population: '6137428',
    cases: '945656',
    deaths: '15689'
  },
  {
    state: 'MT',
    population: '1068778',
    cases: '194397',
    deaths: '2869'
  },
  {
    state: 'NE',
    population: '1934408',
    cases: '323698',
    deaths: '3271'
  },
  {
    state: 'NV',
    population: '3080156',
    cases: '480615',
    deaths: '8227'
  },
  {
    state: 'NH',
    population: '1,359,711',
    cases: '178,967',
    deaths: '1,810'
  },
  {
    state: 'NJ',
    population: '8,882,190',
    cases: '1,311,119',
    deaths: '28,613'
  },
  {
    state: 'NM',
    population: '2,096,829',
    cases: '332,975',
    deaths: '5,491'
  },
  {
    state: 'NY',
    population: '19,453,561',
    cases: '2,962,349',
    deaths: '58,864'
  },
  {
    state: 'NC',
    population: '10,488,084',
    cases: '1,577,154',
    deaths: '19,033'
  },
  {
    state: 'ND',
    population: '762,062',
    cases: '167,818',
    deaths: '1,962'
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
