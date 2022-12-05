const categoryModel = require("../models/categoryModel");

const getCategory = async (req, res) => {
  await categoryModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (categoryModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(200).json({ message: "success", data:data });
  });
};

const getCategoryById = async (req, res) => {
  await categoryModel
    .findById(req.params.id)
    .then((data) => {
      return res.status(200).json({ message: "success", data:data });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error:error });
    });
};

const createCategory = async (req, res) => {
  await categoryModel
    .insertMany(req.body.category)
    .then((data) => {
      if (category.length == 0) {
        return res.json({ message: "there is no active category" });
      }
      return res.status(200).json({ message: "success", data :data });
    })
    .catch((error) => {
      res.status(404).json({ message: "adding failed", error :error });
    });
};

const updateCategory = async (req, res) => {
  await categoryModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((data) => {
      res.status(200).json({ message: "success", data :data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error:error });
    });
};

const deleteCategory = async (req, res) => {
  await categoryModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "the item deleted", data : data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error :error });
    });
};

module.exports = {
  getCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};