const router = require('express').Router();
const { States, Covid } = require("../../models");
const sequelize = require('../../config/connection');


router.get('/', (req, res) => {
    Covid.findAll({
      attributes: ['id', 'state', 'population', 'cases', 'deaths'],
      
      
    })
      .then(covid => res.json(covid))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });




  module.exports = router;