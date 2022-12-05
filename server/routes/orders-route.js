const router = require('express').Router()

const {getOrders,createOrders,getOrderstById,updateOrders,deleteOrders} = require('../controllers/orders-ctrl')

router.get('/',getOrders)
router.get('/getById/:id',getOrderstById)
router.post('/createOrder',createOrders);
router.put('/updateOrder/:id',updateOrders)
router.delete('/deleteOrder/:id',deleteOrders)

module.exports = router;