const express = require("express");
const statusController = require("../controllers/statusController");

const statusRouter = express.Router();

statusRouter.post("/createStatus", statusController.createStatus);
statusRouter.get("/getStatusById/:id", statusController.getStatusById);
statusRouter.get(
  "/getStatusByCarId/:car_id",
  statusController.getStatusByCarId
);
statusRouter.get(
  "/getStatusByDateStart/:date_start",
  statusController.getStatusByDateStart
);
statusRouter.get(
  "/getStatusByDateEnd/:date_end",
  statusController.getStatusByDateEnd
);
statusRouter.delete("/deleteStatus/:id", statusController.deleteStatus);

statusRouter.put("/updateStatus/:id", statusController.updateStatus);

module.exports = statusRouter;
