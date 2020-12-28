const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
  Product.find({}).exec((err, products) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    res.json(products);
  });
};

exports.getProductById = (req, res) => {
  Product.findById(req.params.id).exec((err, product) => {
    if (err) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    res.json(product);
  });
};
