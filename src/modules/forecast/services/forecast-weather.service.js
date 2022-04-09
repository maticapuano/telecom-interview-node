const openWeatherMapHttpInstance = require("../../../shared/utils/openweathermap-http-request");
const LocationService = require("../../location/services/location.service");

class ForecastWeatherService {
    #httpInstance;
    #locationService;

    constructor() {
        this.#httpInstance = openWeatherMapHttpInstance();
        this.#locationService = new LocationService();
    }

    async forecastWeather({ city, remoteIp }) {
        const { city: cityFromIp } = await this.#locationService.getLocation(remoteIp);
        const cityToSearch = city || cityFromIp;
        const daysToForecast = 5;
        const { data } = await this.#httpInstance.get("/forecast", {
            params: { q: cityToSearch, cnt: daysToForecast },
        });

        return data;
    }
}

module.exports = {
    ForecastWeatherService,
};
