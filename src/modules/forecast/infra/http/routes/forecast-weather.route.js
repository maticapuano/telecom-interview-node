const { Router } = require("express");
const { ForecastWeatherController } = require("../controllers/forecast-weather.controller");

const forecastWeatherRouter = Router();

const controller = new ForecastWeatherController();

forecastWeatherRouter.get("/", controller.getForecastWeather.bind(controller));

module.exports = forecastWeatherRouter;
