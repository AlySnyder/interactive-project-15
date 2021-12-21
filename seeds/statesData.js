const { States } = require('../models');

const statesData = [
  {
    state_name: 'Alabama',
    covid_data_id: 1
  },
  {
    state_name: 'Alaska',
    covid_data_id: 2
  },
  {
    state_name: 'Arizona',
    covid_data_id: 3
  },
  {
    state_name: 'Arkansas',
    covid_data_id: 4
  },
  {
    state_name: 'California',
    covid_data_id: 5
  },
  {
    state_name: 'Colorado',
    covid_data_id: 6
  },
  {
    state_name: 'Connecticut',
    covid_data_id: 7
  },
  {
    state_name: 'Delaware',
    covid_data_id: 8
  },
  {
    state_name: 'Florida',
    covid_data_id: 9
  },
  {
    state_name: 'Georgia',
    covid_data_id: 10
  },
  {
    state_name: 'Hawaii',
    covid_data_id: 11
  },
  {
    state_name: 'Idaho',
    covid_data_id: 12
  },
  {
    state_name: 'Illinois',
    covid_data_id: 13
  },
  {
    state_name: 'Indiana',
    covid_data_id: 14
  },
  {
    state_name: 'Iowa',
    covid_data_id: 15
  },
  {
    state_name: 'Kansas',
    covid_data_id: 16
  },
  {
    state_name: 'Kentucky',
    covid_data_id: 17
  },
  {
    state_name: 'Lousiana',
    covid_data_id: 18
  },
  {
    state_name: 'Maine',
    covid_data_id: 19
  },
  {
    state_name: 'Maryland',
    covid_data_id: 20
  },
  {
    state_name: 'Massachusetts',
    covid_data_id: 21
  },
  {
    state_name: 'Michigan',
    covid_data_id: 22
  },
  {
    state_name: 'Minnesota',
    covid_data_id: 23
  },
  {
    state_name: 'Mississippi',
    covid_data_id: 24
  },
  {
    state_name: 'Missouri',
    covid_data_id: 25
  },
  {
    state_name: 'Montana',
    covid_data_id: 26
  },
  {
    state_name: 'Nebraska',
    covid_data_id: 27
  },
  {
    state_name: 'Nevada',
    covid_data_id: 28
  },
  {
    state_name: 'New Hampshire',
    covid_data_id: 29
  },
  {
    state_name: 'New Jersey',
    covid_data_id: 30
  },
  {
    state_name: 'New Mexico',
    covid_data_id: 31
  },
  {
    state_name: 'New York',
    covid_data_id: 32
  },
  {
    state_name: 'North Carolina',
    covid_data_id: 33
  },
  {
    state_name: 'North Dakota',
    covid_data_id: 34
  },
  {
    state_name: 'Ohio',
    covid_data_id: 35
  },
  {
    state_name: 'Oklahoma',
    covid_data_id: 36
  },
  {
    state_name: 'Oregon',
    covid_data_id: 37
  },
  {
    state_name: 'Pennsylvania',
    covid_data_id: 38
  },
  {
    state_name: 'Rhode Island',
    covid_data_id: 39
  },
  {
    state_name: 'South Carolina',
    covid_data_id: 40
  },
  {
    state_name: 'South Dakota',
    covid_data_id: 41
  },
  {
    state_name: 'Tennessee',
    covid_data_id: 42
  },
  {
    state_name: 'Texas',
    covid_data_id: 43
  },
  {
    state_name: 'Utah',
    covid_data_id: 44
  },
  {
    state_name: 'Vermont',
    covid_data_id: 45
  },
  {
    state_name: 'Virginia',
    covid_data_id: 46
  },
  {
    state_name: 'Washington',
    covid_data_id: 47
  },
  {
    state_name: 'West Virginia',
    covid_data_id: 48
  },
  {
    state_name: 'Wisconsin',
    covid_data_id: 49
  },
  {
    state_name: 'Wyoming',
    covid_data_id: 50
  },
];

const seedStates = () => States.bulkCreate(statesData);

module.exports = seedStates;