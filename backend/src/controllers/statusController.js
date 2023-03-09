/* eslint-disable camelcase */
const statusModel = require("../models/statusModel");

const statusController = {
  createStatus: async (req, res) => {
    const { status } = req.body;
    try {
      const result = await statusModel.createStatus(status);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getStatusById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await statusModel.getStatusById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getStatusByCarId: async (req, res) => {
    const { car_id } = req.params;
    try {
      const result = await statusModel.getStatusByCarId(car_id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getStatusByDateStart: async (req, res) => {
    const { date_start } = req.params;
    try {
      const result = await statusModel.getStatusByDateStart(date_start);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getStatusByDateEnd: async (req, res) => {
    const { date_end } = req.params;
    try {
      const result = await statusModel.getStatusByDateEnd(date_end);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteStatus: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await statusModel.deleteStatusById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const result = await statusModel.updateStatus(id, status);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = statusController;
