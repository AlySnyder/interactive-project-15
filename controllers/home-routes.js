const router = require('express').Router();
const sequelize = require('../config/connection');
const { States, Covid, User } = require('../models');



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.render('search');
  } else res.render('login')
  
});


router.get('/search', (req, res) => {
  if (req.session.loggedIn) {
  
  res.render('search');
  } else res.render('login')
});


router.get('/', (req, res) => {
  console.log(req.session);
  States.findAll({
    attributes: [
      'id',
      'state_name'
    ],
    
  })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      const states = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { states });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;