const { Covid } = require('../models');

const covidData = [
  {
    state_code: 'AL',
    population: '4903185',
    cases: '854229',
    deaths: '16285'
  },
  {
    state_code: 'AK',
    population: '731545',
    cases: '148380',
    deaths: '857'
  },
  {
    state_code: 'AZ',
    population: '7278717',
    cases: '1320748',
    deaths: '23243'
  },
  {
    state_code: 'AR',
    population: '3017804',
    cases: '539483',
    deaths: '8880'
  },
  {
    state_code: 'CA',
    population: '39512223',
    cases: '5046435',
    deaths: '75676'
  },
  {
    state_code: 'CO',
    population: '5758736',
    cases: '860004',
    deaths: '10018'
  },
  {
    state_code: 'CT',
    population: '3565287',
    cases: '450315',
    deaths: '8946'
  },
  {
    state_code: 'DE',
    population: '973764',
    cases: '161650',
    deaths: '2225'
  },
  {
    state_code: 'FL',
    population: '21477737',
    cases: '3764368',
    deaths: '62073'
  },
  {
    state_code: 'GA',
    population: '10617423',
    cases: '1683676',
    deaths: '30882'
  },
  {
    state_code: 'HI',
    population: '1415872',
    cases: '89593',
    deaths: '1058'
  },
  {
    state_code: 'ID',
    population: '1787065',
    cases: '312591',
    deaths: '4049'
  },
  {
    state_code: 'IL',
    population: '12671821',
    cases: '1911649',
    deaths: '29985'
  },
  {
    state_code: 'IN',
    population: '6732219',
    cases: '1166283',
    deaths: '18176'
  },
  {
    state_code: 'IA',
    population: '3155070',
    cases: '593508',
    deaths: '7550'
  },
  {
    state_code: 'KS',
    population: '2913314',
    cases: '489354',
    deaths: '6875'
  },
  {
    state_code: 'KY',
    population: '4467673',
    cases: '817818',
    deaths: '11676'
  },
  {
    state_code: 'LA',
    population: '4648794',
    cases: '777696',
    deaths: '14897'
  },
  {
    state_code: 'ME',
    population: '1344212',
    cases: '131380',
    deaths: '1376'
  },
  {
    state_code: 'MD',
    population: '6045680',
    cases: '592679',
    deaths: '11255'
  },
  {
    state_code: 'MA',
    population: '6892503',
    cases: '985946',
    deaths: '19725'
  },
  {
    state_code: 'MI',
    population: '9986857',
    cases: '1585297',
    deaths: '27080'
  },
  {
    state_code: 'MN',
    population: '5639632',
    cases: '959989',
    deaths: '10142'
  },
  {
    state_code: 'MS',
    population: '2976149',
    cases: '520834',
    deaths: '10347'
  },
  {
    state_code: 'MO',
    population: '6137428',
    cases: '945656',
    deaths: '15689'
  },
  {
    state_code: 'MT',
    population: '1068778',
    cases: '194397',
    deaths: '2869'
  },
  {
    state_code: 'NE',
    population: '1934408',
    cases: '323698',
    deaths: '3271'
  },
  {
    state_code: 'NV',
    population: '3080156',
    cases: '480615',
    deaths: '8227'
  },
  {
    state_code: 'NH',
    population: '1359711',
    cases: '178967',
    deaths: '1810'
  },
  {
    state_code: 'NJ',
    population: '8882190',
    cases: '1311119',
    deaths: '28613'
  },
  {
    state_code: 'NM',
    population: '2096829',
    cases: '332975',
    deaths: '5491'
  },
  {
    state_code: 'NY',
    population: '19453561',
    cases: '2962349',
    deaths: '58864'
  },
  {
    state_code: 'NC',
    population: '10488084',
    cases: '1577154',
    deaths: '19033'
  },
  {
    state_code: 'ND',
    population: '762062',
    cases: '167818',
    deaths: '1962'
  },
  {
    state_code: 'OH',
    population: '11689100',
    cases: '1796951',
    deaths: '27594'
  },
  {
    state_code: 'OK',
    population: '3956971',
    cases: '684340',
    deaths: '11336'
  },
  {
    state_code: 'OR',
    population: '4217737',
    cases: '402436',
    deaths: '5469'
  },
  {
    state_code: 'PA',
    population: '12801989',
    cases: '1850578',
    deaths: '34731'
  },
  {
    state_code: 'RI',
    population: '1059361',
    cases: '204954',
    deaths: '2975'
  },
  {
    state_code: 'SC',
    population: '5148714',
    cases: '932938',
    deaths: '14419'
  },
  {
    state_code: 'SD',
    population: '884659',
    cases: '172300',
    deaths: '2411'
  },
  {
    state_code: 'TN',
    population: '6829174',
    cases: '1341702',
    deaths: '17818'
  },
  {
    state_code: 'TX',
    population: '28995881',
    cases: '4401029',
    deaths: '75126'
  },
  {
    state_code: 'UT',
    population: '3205958',
    cases: '614270',
    deaths: '3673'
  },
  {
    state_code: 'VT',
    population: '623989',
    cases: '56661',
    deaths: '440'
  },
  {
    state_code: 'VA',
    population: '8535519',
    cases: '1003110',
    deaths: '14992'
  },
  {
    state_code: 'WA',
    population: '7614893',
    cases: '798275',
    deaths: '9659'
  },
  {
    state_code: 'WV',
    population: '1792147',
    cases: '310245',
    deaths: '5142'
  },
  {
    state_code: 'WI',
    population: '5822434',
    cases: '1038465',
    deaths: '10483'
  },
  {
    state_code: 'WY',
    population: '578759',
    cases: '113233',
    deaths: '1502'
  }
  
  
];

const seedCovid = () => Covid.bulkCreate(covidData);

module.exports = seedCovid;
