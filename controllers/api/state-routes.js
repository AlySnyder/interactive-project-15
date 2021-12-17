const router = require('express').Router();
const { States, Covid } = require("../../models");
const sequelize = require('../../config/connection');


router.get('/', (req, res) => {
    States.findAll({
      attributes: ['id', 'state', 'covid_data_id'],
      
      
    })
      .then(states => res.json(states))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });




  module.exports = router;