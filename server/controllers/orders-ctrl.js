const ordersModel = require("../models/orderModel");

const getOrders = async (req, res) => {
  await ordersModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (ordersModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(200).json({ message: "success", data:data });
  });
};

const getOrderstById = async (req, res) => {
  await ordersModel
    .findById(req.params.id)
    .then((data) => {
      return res.status(200).json({ message: "success", data:data });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error:error });
    });
};

const createOrders = async (req, res) => {
  await ordersModel
    .insertMany(req.body.order)
    .then((data) => {
      if (data.length == 0) {
        return res.json({ message: "there is no active data" });
      }
      return res.status(200).json({ message: "success", data:data});
    })
    .catch((error) => {
      res.status(404).json({ message: "adding failed", error:error });
    });
};

const updateOrders = async (req, res) => {
  await ordersModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((product) => {
      res.status(200).json({ message: "success", product });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error });
    });
};

const deleteOrders = async (req, res) => {
  await ordersModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ message: "the item deleted", result });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error });
    });
};

module.exports = {
  getOrders,
  createOrders,
  getOrderstById,
  updateOrders,
  deleteOrders,
};