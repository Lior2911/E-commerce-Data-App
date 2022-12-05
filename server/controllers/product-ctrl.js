const productModel = require("../models/productModel");

const getProduct = async (req, res) => {
  await productModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (productModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(200).json({ message: "success", data:data });
  });
};

const getProductById = async (req, res) => {
  await productModel
    .findById(req.params.id)
    .then((product) => {
      return res.status(200).json({ message: "success", product });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error });
    });
};

const createProduct = async (req, res) => {
  await productModel
    .insertMany(req.body.product)
    .then((product) => {
      if (product.length == 0) {
        return res.json({ message: "there is no active product" });
      }
      return res.status(200).json({ message: "success", product:product});
    })
    .catch((error) => {
      res.status(404).json({ message: "adding failed", error:error });
    });
};

const updateProduct = async (req, res) => {
  await productModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((product) => {
      res.status(200).json({ message: "success", product });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error });
    });
};

const deleteProduct = async (req, res) => {
  await productModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ message: "the item deleted", result });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error });
    });
};

module.exports = {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};