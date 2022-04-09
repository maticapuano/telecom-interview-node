const parseIpRequest = require("../../../../../shared/utils/ip-parse-request");
const { ForecastWeatherService } = require("../../../services/forecast-weather.service");

class ForecastWeatherController {
    #forecastWeatherService;

    constructor() {
        this.#forecastWeatherService = new ForecastWeatherService();
    }

    async getForecastWeather(req, res) {
        const { city } = req.query;
        const remoteIp = parseIpRequest(req);
        const forecastWeather = await this.#forecastWeatherService.forecastWeather({
            city,
            remoteIp,
        });

        return res.status(200).json(forecastWeather);
    }
}

module.exports = {
    ForecastWeatherController,
};
