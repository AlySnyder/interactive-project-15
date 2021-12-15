const { States } = require('../models');

const statesData = [
  {
    state: 'Alabama',
    covid_data_id: 1
  },
  {
    state: 'Alaska',
    covid_data_id: 2
  },
  {
    state: 'Arizona',
    covid_data_id: 3
  },
  {
    state: 'Arkansas',
    covid_data_id: 4
  },
  {
    state: 'California',
    covid_data_id: 5
  },
  {
    state: 'Colorado',
    covid_data_id: 6
  },
  {
    state: 'Connecticut',
    covid_data_id: 7
  },
  {
    state: 'Delaware',
    covid_data_id: 8
  },
  {
    state: 'Florida',
    covid_data_id: 9
  },
  {
    state: 'Georgia',
    covid_data_id: 10
  },
  {
    state: 'Hawaii',
    covid_data_id: 11
  },
  {
    state: 'Idaho',
    covid_data_id: 12
  },
  {
    state: 'Illinois',
    covid_data_id: 13
  },
  {
    state: 'Indiana',
    covid_data_id: 14
  },
  {
    state: 'Iowa',
    covid_data_id: 15
  },
  {
    state: 'Kansas',
    covid_data_id: 16
  },
  {
    state: 'Kentucky',
    covid_data_id: 17
  },
  {
    state: 'Lousiana',
    covid_data_id: 18
  },
  {
    state: 'Maine',
    covid_data_id: 19
  },
  {
    state: 'Maryland',
    covid_data_id: 20
  },
  {
    state: 'Massachusetts',
    covid_data_id: 21
  },
  {
    state: 'Michigan',
    covid_data_id: 22
  },
  {
    state: 'Minnesota',
    covid_data_id: 23
  },
  {
    state: 'Mississippi',
    covid_data_id: 24
  },
  {
    state: 'Missouri',
    covid_data_id: 25
  },
  {
    state: 'Montana',
    covid_data_id: 26
  },
  {
    state: 'Nebraska',
    covid_data_id: 27
  },
  {
    state: 'Nevada',
    covid_data_id: 28
  },
  {
    state: 'New Hampshire',
    covid_data_id: 29
  },
  {
    state: 'New Jersey',
    covid_data_id: 30
  },
  {
    state: 'New Mexico',
    covid_data_id: 31
  },
  {
    state: 'New York',
    covid_data_id: 32
  },
  {
    state: 'North Carolina',
    covid_data_id: 33
  },
  {
    state: 'North Dakota',
    covid_data_id: 34
  },
  {
    state: 'Ohio',
    covid_data_id: 35
  },
  {
    state: 'Oklahoma',
    covid_data_id: 36
  },
  {
    state: 'Oregon',
    covid_data_id: 37
  },
  {
    state: 'Pennsylvania',
    covid_data_id: 38
  },
  {
    state: 'Rhode Island',
    covid_data_id: 39
  },
  {
    state: 'South Carolina',
    covid_data_id: 40
  },
  {
    state: 'South Dakota',
    covid_data_id: 41
  },
  {
    state: 'Tennessee',
    covid_data_id: 42
  },
  {
    state: 'Texas',
    covid_data_id: 43
  },
  {
    state: 'Utah',
    covid_data_id: 44
  },
  {
    state: 'Vermont',
    covid_data_id: 45
  },
  {
    state: 'Virginia',
    covid_data_id: 46
  },
  {
    state: 'Washington',
    covid_data_id: 47
  },
  {
    state: 'West Virginia',
    covid_data_id: 48
  },
  {
    state: 'Wisconsin',
    covid_data_id: 49
  },
  {
    state: 'Wyoming',
    covid_data_id: 50
  },
];

const seedStates = () => States.bulkCreate(statesData);

module.exports = seedStates;