const router = require('express').Router();
const { Chores } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/child/:id/chore', async (req, res) => {
     console.log('test', req)
    try {
      console.log({...req.body})
      const newChore = await Chores.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newChore);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
      
    }
  });


  // router.update('/:id', async (req, res) => {
  //   try {
  //     const choreData = await Chore.update({
  //       where: {
  //         id: req.params.id,
  //         user_id: req.session.user_id,
  //         status: false,
  //       },
  //     });
  
  //     if (!choreData) {
  //       res.status(404).json({ message: '???' });
  //       return;
  //     }
  
  //     res.status(200).json(choreData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  

  module.exports = router;
