const router = require('express').Router();
const userRoutes = require('./userRoutes');
const childRoutes = require('./childRoutes');
const choreRoutes = require('./choreRoutes');

router.use('/users', userRoutes);
router.use('/child', childRoutes);
router.use('/chores', choreRoutes);


module.exports = router;
