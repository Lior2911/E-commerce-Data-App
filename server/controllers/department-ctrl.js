const departmentModel = require('../models/departmentModel')

const getDepartment = async (req, res) => {
  await departmentModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (departmentModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(300).json({ message: "success", data : data });
  });
};
const getDepartmentById = async (req, res) => {
  await departmentModel
    .findById(req.params.id)
    .then((data) => {
      return res.status(200).json({ message: "success", data:data });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error:error });
    });
};

const createDepartment = async (req, res) => {
  await departmentModel
    .insertMany(req.body.department)
    .then((data) => {
      if (departmentModel.length == 0) {
        return res.json({ message: "there is no active data" });
      }
      return res.status(200).json({ message: "success", data:data });
    })
    .catch((error) => {
      res.status(404).json({ message: "adding failed", error:error });
    });
};
const updateDepartment = async (req, res) => {
  await departmentModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((data) => {
      res.status(200).json({ message: "success", data:data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error:error });
    });
};
const deleteDepartment = async (req, res) => {
  await departmentModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "the item deleted", data:data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error:error });
    });
};
module.exports = {getDepartment,getDepartmentById,createDepartment,updateDepartment,deleteDepartment}