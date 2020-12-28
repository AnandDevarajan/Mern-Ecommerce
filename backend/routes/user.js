const express = require('express');
const router = express.Router();
const { authUser, getUserProfile } = require('../controllers/user');
const { verifyAuth } = require('../middleware/auth');

router.post('/login', authUser);
router.route('/profile').get(verifyAuth, getUserProfile);

module.exports = router;
