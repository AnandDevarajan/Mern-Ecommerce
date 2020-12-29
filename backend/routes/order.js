const express = require('express');
const router = express.Router();
const { addOrderItems } = require('../controllers/order');
const { verifyAuth } = require('../middleware/auth');

router.post('/', verifyAuth, addOrderItems);

module.exports = router;
