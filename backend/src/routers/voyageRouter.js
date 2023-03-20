const express = require("express");
const voyageController = require("../controllers/voyageController");

const voyageRouter = express.Router();

voyageRouter.get("/getAllVoyages", voyageController.getAllVoyages); // good
voyageRouter.post("/getAllVoyageByDate", voyageController.getAllVoyageByDate); // not good
voyageRouter.get("/getAllVoyageByCity", voyageController.getAllVoyageByCity); // dont use
voyageRouter.post("/createVoyage", voyageController.createOneVoyage); // good

module.exports = voyageRouter;
