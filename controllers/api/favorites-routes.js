const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Favorites } = require('../../models');



router.post('/', (req, res) => {
    Favorites.create({
      fav_name: req.body.fav_name,
      fav_pop: req.body.fav_pop,
      fav_case: req.body.fav_case,
      fav_death: req.body.fav_death,
      user_id: req.session.user_id
    })
      .then(dbFavData => res.json(dbFavData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/', (req, res) => {
    Favorites.findAll({
      attributes: ['id', 'fav_name', 'fav_pop', 'fav_case', 'fav_death', 'user_id'],
      
      
    })
      .then(covid => res.json(covid))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


 


  module.exports = router;