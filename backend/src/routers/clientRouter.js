const express = require("express");
const clientController = require("../controllers/clientController");

const clientRoute = express.Router();

clientRoute.post("/createClient", clientController.createclient);
clientRoute.get("/getClientById/:id", clientController.getClientById);
clientRoute.get(
  "/getClientByLocalisation/:localisation",
  clientController.getClientByLocalisation
);
clientRoute.post("/login", clientController.login);
clientRoute.get("/getAllClients", clientController.getAll);
module.exports = clientRoute;
clientRoute.get("/:role", clientController.getClientByRole);
