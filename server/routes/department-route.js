const router = require("express").Router();

const {
  getDepartment,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/department-ctrl");

router.get('/',getDepartment)
router.get('/getById/:id',getDepartmentById)
router.post('/createDepartment',createDepartment);
router.put('/updateDepartment/:id',updateDepartment)
router.delete('/deleteDepartment/:id',deleteDepartment)


module.exports = router