const CurrentWeatherService = require("../../../services/current-weather.service");
const parseIpRequest = require("../../../../../shared/utils/ip-parse-request");

class CurrentWeatherController {
    #weatherService;

    constructor() {
        this.#weatherService = new CurrentWeatherService();
    }

    async getCurrentWeather(req, res) {
        const { city } = req.query;
        const remoteIp = parseIpRequest(req);
        const weather = await this.#weatherService.currentWeather({
            city,
            remoteIp,
        });

        return res.status(200).send(weather);
    }
}

module.exports = {
    CurrentWeatherController,
};
