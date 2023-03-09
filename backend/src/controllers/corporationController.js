const corporationModel = require("../models/corporationModel");

const corporationController = {
  createCorporation: async (req, res) => {
    const { name, logo, password, email } = req.body;
    try {
      const result = await corporationModel.createCorporation(
        name,
        logo,
        password,
        email
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCorporationById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await corporationModel.getCorporationById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCorporationByName: async (req, res) => {
    const { name } = req.params;
    try {
      const result = await corporationModel.getCorporationByName(name);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCorporationByEmail: async (req, res) => {
    const { email } = req.params;
    try {
      const result = await corporationModel.getCorporationByEmail(email);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteCorporation: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await corporationModel.deleteCorporationbyId(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateCorporation: async (req, res) => {
    const { id, name, logo, password, email } = req.body;
    try {
      const result = await corporationModel.updateCorporation(
        id,
        name,
        logo,
        password,
        email
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllCorporation: async (req, res) => {
    try {
      const result = await corporationModel.getAllCorporations();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = corporationController;
