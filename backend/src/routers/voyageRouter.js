const express = require("express");
const voyageController = require("../controllers/voyageController");

const voyageRouter = express.Router();

voyageRouter.get("/getAllVoyages", voyageController.getAllVoyages);
voyageRouter.get("/getAllVoyageByDate", voyageController.getAllVoyageByDate);
voyageRouter.get("/getAllVoyageByCity", voyageController.getAllVoyageByCity);
voyageRouter.post("/createVoyage", voyageController.createOneVoyage);

module.exports = voyageRouter;
