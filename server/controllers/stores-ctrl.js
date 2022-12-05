const storesModel = require("../models/storesModel");

const getStores = async (req, res) => {
  await storesModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (storesModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(200).json({ message: "success", data:data });
  });
};

const getStoresById = async (req, res) => {
  await storesModel
    .findById(req.params.id)
    .then((store) => {
      return res.status(200).json({ message: "success", store :store });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error:error });
    });
};

const createStores = async (req, res) => {
  await storesModel
    .insertMany(req.body.store)
    .then((store) => {
      if (store.length == 0) {
        return res.json({ message: "there is no active store" });
      }
      return res.status(200).json({ message: "success", store:store });
    })
    .catch((error) => {
      res.status(404).json({ message: "adding failed", error:error });
    });
};

const updateStores = async (req, res) => {
  await storesModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((store) => {
      res.status(200).json({ message: "success", store:store });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error:error });
    });
};

const deleteStore = async (req, res) => {
  await storesModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ message: "the item deleted", result });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error });
    });
};

module.exports = {
  getStores,
  createStores,
  getStoresById,
  updateStores,
  deleteStore,
};