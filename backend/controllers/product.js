const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

//GET all products
exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products) {
    res.json(products);
  } else {
    res.status(400);
    throw new Error('No products found');
  }
});

//GET a product
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(400);
    throw new Error('No product found');
  }
});

//DELETE a product
exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed successfully' });
  } else {
    res.status(400);
    throw new Error('No product found');
  }
});
