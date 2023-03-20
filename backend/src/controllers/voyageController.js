/* eslint-disable camelcase */
const voyageModel = require("../models/voyageModel");

const voyageController = {
  getAllVoyages: (_req, res, next) => {
    voyageModel
      .findAllVoyages()
      .then((input) => res.send(input))

      .catch((err) => next(err));
  },

  getAllVoyageByDate: (req, res) => {
    const { cityStart, cityDestination, dateStart, dateEnd } = req.body;
    voyageModel
      .findAllVoyageByDate(cityStart, cityDestination, dateStart, dateEnd)
      .then((voyage) => res.send(voyage))
      .catch((err) => res.send(err));
  },

  createOneVoyage: async (req, res) => {
    const {
      id_car,
      id_user,
      cityStart,
      cityDestination,
      dateStart,
      dateEnd,
      seatLeft,
    } = req.body;
    try {
      const result = voyageModel.createVoyage(
        id_car,
        id_user,
        cityStart,
        cityDestination,
        dateStart,
        dateEnd,
        seatLeft
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllVoyageByCity: async (req, res) => {
    const { cityStart, cityDestination } = req.body;
    try {
      const result = await voyageModel.findAllVoyageByCity(
        cityStart,
        cityDestination
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = voyageController;
