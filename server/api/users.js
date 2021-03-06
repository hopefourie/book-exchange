const router = require('express').Router();
const { User } = require('../db');

//GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
