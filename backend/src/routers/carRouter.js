const express = require("express");
const carController = require("../controllers/carController");

const carRoute = express.Router();

carRoute.post("/createCar", carController.createNewCar);
carRoute.get("/getCarById/:id", carController.getACarById);
carRoute.get("/getCarByBrand/:brand", carController.getACarByBrand);
carRoute.get("/getCarByModel/:model", carController.getACarByModel);
carRoute.get("/getCarByColor/:color", carController.getACarByColor);
carRoute.get("/getCarBySeats/:seats", carController.getACarbySeat);
carRoute.get("/getCarBycategory/:category", carController.getACarbyCategory);
carRoute.get("getCarByPrixJ/:prixJ", carController.getaCarByPrixJour);
carRoute.delete("/deleteCar/:id", carController.deleteACarByid);
carRoute.put("/updateCar/:id", carController.updateACarById);
carRoute.get("/getAllCars", carController.getAllCars);

module.exports = carRoute;
