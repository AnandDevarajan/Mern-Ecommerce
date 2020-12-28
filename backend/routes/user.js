const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/user');
const { verifyAuth } = require('../middleware/auth');

router.post('/', registerUser);
router.post('/login', authUser);
router.route('/profile').get(verifyAuth, getUserProfile);

module.exports = router;
