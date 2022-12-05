const router = require('express').Router()

const {
  getInformation,
  createInformation,
  getInformationById,
  updateInformation,
  deleteInformation,
} = require('../controllers/information-ctrl')

router.get('/',getInformation)
router.get('/getById/:id',getInformationById)
router.post('/createInformation',createInformation);
router.put('/updateInformation/:id',updateInformation)
router.delete('/deleteInformation/:id',deleteInformation)

module.exports = router;