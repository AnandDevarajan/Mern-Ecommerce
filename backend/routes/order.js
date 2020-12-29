const express = require('express');
const router = express.Router();
const { addOrderItems, getOrderById } = require('../controllers/order');
const { verifyAuth } = require('../middleware/auth');

router.post('/', verifyAuth, addOrderItems);
router.get('/:id', verifyAuth, getOrderById);

module.exports = router;
