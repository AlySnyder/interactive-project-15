const router = require('express').Router();
const sequelize = require('../config/connection');
const { States, Covid } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  Covid.findAll({
    attributes: [
      'id',
      'state',
      'cases',
      'deaths',
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
   /* include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]*/
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

/*router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
}); */

module.exports = router;