const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/user');
const {
  signInValidation,
  signUpValidation,
  isRequestValidated,
} = require('../validators/auth');
const { verifyAuth } = require('../middleware/auth');

router.post('/', signUpValidation, isRequestValidated, registerUser);
router.post('/login', signInValidation, isRequestValidated, authUser);
router.route('/profile').get(verifyAuth, getUserProfile);

module.exports = router;
