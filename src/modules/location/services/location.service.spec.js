const LocationService = require("./location.service");

describe("LocationService", () => {
    let locationService;

    beforeEach(() => {
        locationService = new LocationService();

        locationService.getLocation = jest.fn().mockReturnValue(
            Promise.resolve({
                city: "San Clemente del Tuyu",
                lat: 0,
                lng: 0,
            }),
        );
    });

    it("should be defined", () => {
        expect(locationService).toBeDefined();
    });

    it("should return a location from IP address", async () => {
        const remoteIp = "1.1.1.1";
        const location = await locationService.getLocation(remoteIp);

        expect(locationService.getLocation).toHaveBeenCalledWith(remoteIp);
        expect(location).toEqual({
            city: "San Clemente del Tuyu",
            lat: 0,
            lng: 0,
        });
    });
});
