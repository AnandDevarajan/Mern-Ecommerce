const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products) {
    res.json(products);
  } else {
    res.status(400);
    throw new Error('No products found');
  }
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(400);
    throw new Error('No product found');
  }
});
