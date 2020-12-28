const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/product');
//Get all products
router.get('/', getAllProducts);

//Get a product
router.get('/:id', getProductById);

module.exports = router;
