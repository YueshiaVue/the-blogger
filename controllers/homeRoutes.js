const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    // const postData = await Post.findAll({
    //   include: [
    //     {
    //       model: Post,
    //       attributes: ["title"]
    //     },
    //     {
    //       model: Post,
    //       attributes: ["body"]
    //     },
    //     {
    //       model: Post,
    //       attributes: ["createdAt"]
    //     },
    //     {
    //       model: Post,
    //       attributes: ["updatedAt"]
    //     }
    //   ],
    // });
    // const post = postData.map(async post => {
    //   let userid = post.user_id;
    //   let userData = await Post.findByPk(userid, {
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['user_name'],
    //       }],
    //   });
    //   return {...post,userData};
    // })
    
    // const projects = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      post, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/post');
    return;
  }

  res.render('login');
});

module.exports = router;
