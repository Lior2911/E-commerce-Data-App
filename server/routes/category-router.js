const router = require('express').Router()

const {
  getCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/category-ctrl')

router.get('/',getCategory)
router.get('/getById/:id',getCategoryById)
router.post('/createCategory',createCategory);
router.put('/updateCategory/:id',updateCategory)
router.delete('/deleteCategory/:id',deleteCategory)

module.exports = router;