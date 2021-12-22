const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

const mystatesRoutes = require('./mystates-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/mystates', mystatesRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;