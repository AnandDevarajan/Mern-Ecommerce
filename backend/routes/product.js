const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} = require('../controllers/product');
const { verifyAuth, admin } = require('../middleware/auth');

router.route('/').get(getAllProducts).post(verifyAuth, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(verifyAuth, admin, deleteProduct)
  .put(verifyAuth, admin, updateProduct);

module.exports = router;
