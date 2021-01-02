const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProduct,
} = require('../controllers/product');
const { verifyAuth, admin } = require('../middleware/auth');

router.get('/', getAllProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(verifyAuth, admin, deleteProduct);

module.exports = router;
