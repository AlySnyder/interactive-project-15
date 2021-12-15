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
    state: 'Alabama',
    covid_data_id: 13
  },
  {
    state: 'Alaska',
    covid_data_id: 14
  },
  {
    state: 'Alabama',
    covid_data_id: 15
  },
  {
    state: 'Alaska',
    covid_data_id: 16
  },
  {
    state: 'Alabama',
    covid_data_id: 17
  },
  {
    state: 'Alaska',
    covid_data_id: 18
  },
  {
    state: 'Alabama',
    covid_data_id: 19
  },
  {
    state: 'Alaska',
    covid_data_id: 20
  },
  {
    state: 'Alabama',
    covid_data_id: 21
  },
  {
    state: 'Alaska',
    covid_data_id: 22
  },
  {
    state: 'Alabama',
    covid_data_id: 23
  },
  {
    state: 'Alaska',
    covid_data_id: 24
  },
  {
    state: 'Alabama',
    covid_data_id: 25
  },
  {
    state: 'Alaska',
    covid_data_id: 26
  },
  {
    state: 'Alabama',
    covid_data_id: 27
  },
  {
    state: 'Alaska',
    covid_data_id: 28
  },
  {
    state: 'Alabama',
    covid_data_id: 29
  },
  {
    state: 'Alaska',
    covid_data_id: 30
  },
  {
    state: 'Alabama',
    covid_data_id: 31
  },
  {
    state: 'Alaska',
    covid_data_id: 32
  },
  {
    state: 'Alabama',
    covid_data_id: 33
  },
  {
    state: 'Alaska',
    covid_data_id: 34
  },
  {
    state: 'Alabama',
    covid_data_id: 35
  },
  {
    state: 'Alaska',
    covid_data_id: 36
  },
  {
    state: 'Alabama',
    covid_data_id: 37
  },
  {
    state: 'Alaska',
    covid_data_id: 38
  },
  {
    state: 'Alabama',
    covid_data_id: 39
  },
  {
    state: 'Alaska',
    covid_data_id: 40
  },
  {
    state: 'Alabama',
    covid_data_id: 41
  },
  {
    state: 'Alaska',
    covid_data_id: 42
  },
  {
    state: 'Alabama',
    covid_data_id: 43
  },
  {
    state: 'Alaska',
    covid_data_id: 44
  },
  {
    state: 'Alabama',
    covid_data_id: 45
  },
  {
    state: 'Alaska',
    covid_data_id: 46
  },
  {
    state: 'Alabama',
    covid_data_id: 47
  },
  {
    state: 'Alaska',
    covid_data_id: 48
  },
  {
    state: 'Alabama',
    covid_data_id: 49
  },
  {
    state: 'Alaska',
    covid_data_id: 50
  },
];

const seedStates = () => States.bulkCreate(statesData);

module.exports = seedStates;