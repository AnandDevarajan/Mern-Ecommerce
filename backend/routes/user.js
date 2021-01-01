const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/user');
const { verifyAuth, admin } = require('../middleware/auth');

router.get('/', verifyAuth, admin, getUsers);
router.post('/', registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(verifyAuth, getUserProfile)
  .put(verifyAuth, updateUserProfile);
router
  .route('/:id')
  .get(verifyAuth, admin, getUserById)
  .put(verifyAuth, admin, updateUser)
  .delete(verifyAuth, admin, deleteUser);

module.exports = router;
