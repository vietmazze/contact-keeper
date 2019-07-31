const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private

router.get('/', (req, res) => {
  res.send('Get a user');
});

// @route   POST api/auth
// @desc    Get logged in user
// @access  Public

router.post('/', (req, res) => {
  res.send('Get a user');
});

module.exports = router;
