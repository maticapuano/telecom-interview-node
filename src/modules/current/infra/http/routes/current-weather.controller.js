const { Router } = require("express");
const { CurrentWeatherController } = require("../controllers/current-weather.controller");

const currentWeatherRouter = Router();

const controller = new CurrentWeatherController();

currentWeatherRouter.get("/", controller.getCurrentWeather.bind(controller));

module.exports = currentWeatherRouter;
