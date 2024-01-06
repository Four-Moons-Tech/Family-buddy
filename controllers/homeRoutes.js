const router = require('express').Router();
const { User, Child, Chores } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {
      users,
 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add_child',async(req, res) => {
 try {
   const userData= await User.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] }, 
    include: [{model: Child, 
    include: [{model: Chores,
      attributes: {
        include: [
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              '(SELECT SUM(rate) FROM chores WHERE status = complete)'
            ),
            'totalEarnings',
          ],
        ],
      },
    }]
    }]
    
   })
   const user = userData.get({plain:true})
   console.log(user)
   res.render('addchild', {
    user, 
    logged_in: req.session.logged_in
   })
 } catch (err) {
  console.log(err)
  res.status(500).json(err);
 }
} )

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
