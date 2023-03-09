const express = require("express");
const clientRouter = require("./clientRouter");
const corporationRouter = require("./corporationRouter");
const carRouter = require("./carRouter");
const statusRouter = require("./statusRouter");
const carStatusRouter = require("./carStatusRouter");
const userRouter = require("./userRouter");
const voyageRouter = require("./voyageRouter");

const router = express.Router();

router.use("/client", clientRouter);
router.use("/corporation", corporationRouter);
router.use("/car", carRouter);
router.use("/status", statusRouter);
router.use("/cardispo", carStatusRouter);
router.use("/user", userRouter);
router.use("/voyage", voyageRouter);

module.exports = router;
