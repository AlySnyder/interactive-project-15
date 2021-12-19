const router = require('express').Router();
const { States, Covid } = require("../../models");



router.get('/', (req, res) => {
  States.findAll({
    attributes: ['id', 'state_name'],
    
    
  })
    .then(states => res.json(states))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:state', (req, res) => {
  States.findOne({
    where: {
      state_name: req.params.state_name
    },
    include: [Covid]
  })
      .then(states => res.json(states))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });




  module.exports = router;