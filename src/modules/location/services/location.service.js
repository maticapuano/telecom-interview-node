const { default: axios } = require("axios");

class LocationService {
    #baseUrl = "http://ip-api.com/json/";

    async getLocation(remoteIp) {
        const url = `${this.#baseUrl}/${remoteIp}?fields=status,lat,lon,city`;
        const { data } = await axios.get(url);
        const { city, lat, lon } = data;

        return { city, lat, lon };
    }
}

module.exports = LocationService;
