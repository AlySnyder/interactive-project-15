const router = require('express').Router();

const userRoutes = require('./user-routes');
const stateRoutes = require('./state-routes');
const covidRoutes = require('./covid-routes');

router.use('/users', userRoutes);
router.use('/states', stateRoutes);
router.use('/covid', covidRoutes);

module.exports = router;
