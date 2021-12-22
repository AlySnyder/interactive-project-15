const router = require('express').Router();
const sequelize = require('../config/connection');
const { Favorites, User} = require('../models');
const withAuth = require('../utils/auth');





router.get('/', withAuth, (req, res) => {
  Favorites.findAll({
     where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'fav_name',
      'fav_pop',
      'fav_case',
      'fav_death',
      'user_id'
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