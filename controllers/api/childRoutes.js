const router = require('express').Router();
const { Child } = require('../../models');
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

// Commended out for future development
// router.delete('/:id', async (req, res) => {
//   try {
//     const childData = await Child.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!childData) {
//       res.status(404).json({ message: 'No child found with this id!' });
//       return;
//     }

//     res.status(200).json(childData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
