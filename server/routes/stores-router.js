const router = require('express').Router()

const {
  getStores,
  createStores,
  getStoresById,
  updateStores,
  deleteStore,
} = require('../controllers/stores-ctrl')

router.get('/',getStores)
router.get('/getById/:id',getStoresById)
router.post('/createStores',createStores);
router.put('/updateStores/:id',updateStores)
router.delete('/deleteStores/:id',deleteStore)

module.exports = router;