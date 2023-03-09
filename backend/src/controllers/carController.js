/* eslint-disable camelcase */
const carModel = require("../models/carModel");

const carController = {
  createNewCar: async (req, res) => {
    const { brand, model, price, picture, description } = req.body;
    try {
      const result = await carModel.createCar(
        brand,
        model,
        price,
        picture,
        description
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getACarById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await carModel.getCarById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getACarByBrand: async (req, res) => {
    const { brand } = req.params;
    try {
      const result = await carModel.getCarByBrand(brand);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getACarByModel: async (req, res) => {
    const { model } = req.params;
    try {
      const result = await carModel.getCarByModel(model);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getACarByColor: async (req, res) => {
    const { color } = req.params;
    try {
      const result = await carModel.getCarByColor(color);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getACarbySeat: async (req, res) => {
    const { seat } = req.params;
    try {
      const result = await carModel.getCarBySeatNumber(seat);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getACarbyCategory: async (req, res) => {
    const { category } = req.params;
    try {
      const result = await carModel.getCarByCategory(category);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getaCarByPrixJour: async (req, res) => {
    const { prixJ } = req.params;
    try {
      const result = await carModel.getCarByPrixJ(prixJ);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteACarByid: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await carModel.deleteCarById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateACarById: async (req, res) => {
    const { id } = req.params;
    const { brand, model, price, picture, description } = req.body;
    try {
      const result = await carModel.updateCarById(
        id,
        brand,
        model,
        price,
        picture,
        description
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllCars: async (req, res) => {
    try {
      const result = await carModel.getAllCars();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = carController;
