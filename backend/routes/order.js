const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require('../controllers/order');
const { verifyAuth } = require('../middleware/auth');

router.post('/', verifyAuth, addOrderItems);
router.get('/myorders', verifyAuth, getMyOrders);
router.get('/:id', verifyAuth, getOrderById);
router.put('/:id/pay', verifyAuth, updateOrderToPaid);

module.exports = router;
