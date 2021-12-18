const router = require('express').Router();
const { States, Covid } = require("../../models");

router.get('/:state', (req, res) => {
  console.log('i am in states get')
  States.findOne({
    where: {
      state: req.params.state
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