const router = require('express').Router();
const { Users, Reviews } = require('../models');


router.get('/', async (req, res)=> {
  res.render('homepage', {title: 'main'});
});

   //create profile route
router.get('/createprofile', async (req, res)=> {
    res.render('createprofile', {title: 'main'});
  });

     //create profile route
// router.get('/profile', async (req, res)=> {
//   res.render('profile', {title: 'main'});
// });


  // GET one profile
router.get('/profile/:id', async (req, res) => {
    try {
      const dbUserData = await Users.findByPk(req.params.id, {
        include: [
          {
            model: Reviews,
            attributes: [
              'review_id',
              'game_title',
              'rating',
              'comments',
            ],
          },
        ],
      });
  
      const user = dbUserData.get({ plain: true });
      res.render('profile', { user, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


 // Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
module.exports = router;

  