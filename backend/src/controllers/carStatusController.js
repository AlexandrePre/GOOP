/* eslint-disable camelcase */
const carStatusModel = require("../models/carStatusModel");

const carStatusController = {
  getCarByDate: async (req, res) => {
    const { dateStart, dateEnd } = req.body;
    try {
      const result = await carStatusModel.getCarByDate(dateStart, dateEnd);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = carStatusController;
