const LocationService = require("../../../services/location.service");
const parseIpRequest = require("../../../../../shared/utils/ip-parse-request");

class LocationController {
    #locationService;

    constructor() {
        this.#locationService = new LocationService();
    }

    async getLocation(req, res) {
        const remoteIp = parseIpRequest(req);
        const response = await this.#locationService.getLocation(remoteIp);

        return res.status(200).json(response);
    }
}

module.exports = {
    LocationController,
};
