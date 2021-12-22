const router = require('express').Router();
const sequelize = require('../config/connection');
const { Favorites, User} = require('../models');
const withAuth = require('../utils/auth');





router.get('/', withAuth, (req, res) => {
  Favorites.findAll({
  
    attributes: [
      'id',
      'fav_name',
      'fav_pop',
      'fav_case',
      'fav_death'
    ]
  
  })
    .then(faveData => {
      // serialize data before passing to template
      const favorites = faveData.map(post => post.get({ plain: true }));
      res.render('mystates', { favorites, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





module.exports = router;