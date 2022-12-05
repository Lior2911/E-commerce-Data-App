const lastOrderModel = require("../models/lastOrderModel");

const getLastOrder = async (req, res) => {
  await lastOrderModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (lastOrderModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(200).json({ message: "success", data:data });
  });
};

const getLastOrderById = async (req, res) => {
  await lastOrderModel
    .findById(req.params.id)
    .then((data) => {
      return res.status(200).json({ message: "success", data });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error });
    });
};

const createLastOrder = async (req, res) => {
  await lastOrderModel
    .insertMany(req.body.data)
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

const updateLastOrder = async (req, res) => {
  await lastOrderModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((data) => {
      res.status(200).json({ message: "success", data:data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error:error });
    });
};

const deleteLastOrder = async (req, res) => {
  await lastOrderModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "the item deleted", data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error });
    });
};

module.exports = {
  getLastOrder,
  createLastOrder,
  getLastOrderById,
  updateLastOrder,
  deleteLastOrder,
};