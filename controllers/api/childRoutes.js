const router = require('express').Router();
const { Child } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


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

router.delete('/:id', async (req, res) => {
  try {
    const childData = await Child.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!childData) {
      res.status(404).json({ message: 'No child found with this id!' });
      return;
    }

    res.status(200).json(childData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
