const router = require('express').Router();
const sequelize = require('../config/connection');
const { States, Covid, User, Favorites } = require('../models');



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/mystates');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/mystates');
    return;
  }

  res.render('signup');
});



router.get('/', (req, res) => {
  console.log('======================');
  Favorites.findAll({

    
    attributes: [
      'id',
        'fav_name',
        'fav_pop',
        'fav_case',
        'fav_death'
    ],

  })
    .then(dbPostData => {
      const faves = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', { 
        faves,
        loggedIn: req.session.loggedIn
        
       });
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;