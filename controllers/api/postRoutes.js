const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/',withAuth, async (req, res) => {
  let data = {
    ...req.body,
    user_id: req.session.user_id,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
  try {
    const newPost = await Post.create(data);

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   console.log('add delete **',req.body);
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!postData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;