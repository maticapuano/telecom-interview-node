const LocationService = require("../../location/services/location.service");
const openWeatherMapHttpInstance = require("../../../shared/utils/openweathermap-http-request");

class CurrentWeatherService {
    #httpInstance;
    #locationService;

    constructor() {
        this.#httpInstance = openWeatherMapHttpInstance();

        this.#locationService = new LocationService();
    }

    async currentWeather({ city, remoteIp }) {
        const { city: cityFromIp } = await this.#locationService.getLocation(remoteIp);
        const cityToSearch = city || cityFromIp;

        const { data } = await this.#httpInstance.get("/weather", { params: { q: cityToSearch } });

        return data;
    }
}

module.exports = CurrentWeatherService;
