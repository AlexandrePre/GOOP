const express = require("express");
const carStatusController = require("../controllers/carStatusController");

const carStatusRoute = express.Router();

carStatusRoute.get("/getCarByDate", carStatusController.getCarByDate);

module.exports = carStatusRoute;
