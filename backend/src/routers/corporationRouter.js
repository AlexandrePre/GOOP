// eslint-disable-next-line prettier/prettier
const express = require("express");
const corporationController = require("../controllers/corporationController");

const corporationRoute = express.Router();

corporationRoute.post(
  "/createCorporation",
  corporationController.createCorporation
);
corporationRoute.get(
  "/getCorporationById/:id",
  corporationController.getCorporationById
);
corporationRoute.get(
  "/getCorporationByName/:name",
  corporationController.getCorporationByName
);
corporationRoute.get(
  "/getCorporationByEmail/:email",
  corporationController.getCorporationByEmail
);
corporationRoute.delete(
  "/deleteCorporation/:id",
  corporationController.deleteCorporation
);
corporationRoute.put(
  "/updateCorporation",
  corporationController.updateCorporation
);

corporationRoute.get(
  "/getAllCorporations",
  corporationController.getAllCorporation
);

module.exports = corporationRoute;
