const router = require('express').Router()

const {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product-ctrl')

router.get('/',getProduct)
router.get('/getById/:id',getProductById)
router.post('/createProduct',createProduct);
router.put('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)

module.exports = router;