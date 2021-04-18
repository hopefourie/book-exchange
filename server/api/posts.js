const router = require('express').Router();
const { Post } = require('../db');

//GET /api/posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

//PUT /api/posts
router.put('/', async (req, res, next) => {
  try {
    const post = await Post.create(req.body)
    res.json(post)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
