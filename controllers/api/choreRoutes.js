const router = require('express').Router();
const { Chores } = require('../../models');


router.post('/', async (req, res) => {
  
  try {
    // console.log({...req.body})
    // fixed where the user_id was being used when it should've been the child id. we got the child id from the data-childid on the button.
      const newChore = await Chores.create(req.body);
  
      res.status(200).json(newChore);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
      
    }
  });

  //Commended out for future development
  // router.put('/:id', async (req, res) => {
  //   try {
  //     const choreData = await Chores.update({
  //       status: req.body.status
  //     },{
  //       where: {
  //         id: req.params.id,
  //         child_id: req.body.child_id
  //       },
  //     }); 
      
  
  //     if (!choreData) {
  //       res.status(404).json({ message: '???' });
  //       return;
  //     }
  
  //     res.status(200).json(choreData);
  //   } catch (err) {
  //     console.log(err)
  //     res.status(500).json(err);
  //   }
  // });
  

  module.exports = router;
