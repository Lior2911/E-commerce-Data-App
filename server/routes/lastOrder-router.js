const router = require('express').Router()

const {
  getLastOrder,
  createLastOrder,
  getLastOrderById,
  updateLastOrder,
  deleteLastOrder,
} = require('../controllers/lastOrder-ctrl')

router.get('/',getLastOrder)
router.get('/getById/:id',getLastOrderById)
router.post('/createLastOrder',createLastOrder);
router.put('/updateLastOrder/:id',updateLastOrder)
router.delete('/deleteLastOrder/:id',deleteLastOrder)

module.exports = router;