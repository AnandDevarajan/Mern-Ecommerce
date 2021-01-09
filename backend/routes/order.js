const express = require('express');
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} = require('../controllers/order');
const { verifyAuth, admin } = require('../middleware/auth');

router.post('/', verifyAuth, addOrderItems);
router.get('/', verifyAuth, admin, getOrders);
router.get('/myorders', verifyAuth, getMyOrders);
router.get('/:id', verifyAuth, getOrderById);
router.put('/:id/pay', verifyAuth, updateOrderToPaid);

module.exports = router;
