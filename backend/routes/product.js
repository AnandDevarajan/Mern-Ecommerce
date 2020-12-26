const express = require('express');
const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');
const router = express.Router();

//Get all products
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

router.get('/', (req, res) => {
  Product.find({}).exec((err, products) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    res.json(products);
  });
});

//Get a product
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error('Product not found');
//     }
//   })
// );

router.get('/:id', (req, res) => {
  Product.findById(req.params.id).exec((err, product) => {
    if (err) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    res.json(product);
  });
});

module.exports = router;
