const { Router } = require("express");
const currentWeatherRouter = require("../../../../../modules/current/infra/http/routes/current-weather.controller");
const locationRouter = require("../../../../../modules/location/infra/http/routes/location.route");

const v1Router = Router();

v1Router.use("/location", locationRouter);
v1Router.use("/current", currentWeatherRouter);

module.exports = v1Router;
