const router = require('express').Router();
const { Chores } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', async (req, res) => {
    try {
      const newChild = await Child.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newChild);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
