const informationModel = require("../models/informationModel");

const getInformation = async (req, res) => {
  await informationModel.find({}).then((data, error) => {
    if (!data) {
      return res.status(404).json({ message: "failed", error: error });
    }
    if (informationModel.length == 0) {
      return res.json({ message: "the item not found" });
    }
    res.status(200).json({ message: "success", data: data });
  });
};

const getInformationById = async (req, res) => {
  await informationModel
    .findById(req.params.id)
    .then((data) => {
      return res.status(200).json({ message: "success", data: data });
    })
    .catch((error) => {
      return res.status(404).json({ message: "failed", error:error });
    });
};

const createInformation = async (req, res) => {
  await informationModel
    .insertMany(req.body.information)
    .then((data) => {
      if (information.length == 0) {
        return res.json({ message: "there is no active information" });
      }
      return res.status(200).json({ message: "success", data: data });
    })
    .catch((error) => {
      res.status(404).json({ message: "adding failed", error });
    });
};

const updateInformation = async (req, res) => {
  await informationModel
    .findByIdAndUpdate(req.params.id, req.body.id)
    .then((data) => {
      res.status(200).json({ message: "success", data : data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error : error });
    });
};

const deleteInformation = async (req, res) => {
  await informationModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "the item deleted", data:data });
    })
    .catch((error) => {
      res.status(404).json({ message: "failed", error : error });
    });
};

module.exports = {
  getInformation,
  createInformation,
  getInformationById,
  updateInformation,
  deleteInformation,
};