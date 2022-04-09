const { Router } = require("express");
const { LocationController } = require("../controllers/location.controller");

const locationRouter = Router();

const controller = new LocationController();

locationRouter.get("/", controller.getLocation.bind(controller));

module.exports = locationRouter;
