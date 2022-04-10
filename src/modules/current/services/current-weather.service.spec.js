const CurrentWeatherService = require("./current-weather.service");

describe("CurrentWeatherService", () => {
    let currentWeatherService;

    beforeEach(() => {
        currentWeatherService = new CurrentWeatherService();

        currentWeatherService.currentWeather = jest.fn().mockReturnValue(
            Promise.resolve({
                coord: { lon: -56.7235, lat: -36.3569 },
                weather: [{ id: 800, main: "Clear", description: "cielo claro", icon: "01n" }],
                base: "stations",
                main: {
                    temp: 18.88,
                    feels_like: 19.2,
                    temp_min: 18.88,
                    temp_max: 18.88,
                    pressure: 1015,
                    humidity: 91,
                    sea_level: 1015,
                    grnd_level: 1015,
                },
                visibility: 10000,
                wind: { speed: 5.59, deg: 74, gust: 9.23 },
                clouds: { all: 0 },
                dt: 1649552099,
                sys: {
                    type: 2,
                    id: 2019939,
                    country: "AR",
                    sunrise: 1649498800,
                    sunset: 1649539790,
                },
                timezone: -10800,
                id: 3429160,
                name: "San Clemente del Tuyu",
                cod: 200,
            }),
        );
    });

    it("should be defined", () => {
        expect(currentWeatherService).toBeDefined();
    });

    it("should return a current weather", async () => {
        const currentWeather = await currentWeatherService.currentWeather();
        const [weather] = currentWeather.weather;

        expect(currentWeather.coord.lon).toBe(-56.7235);
        expect(currentWeather.coord.lat).toBe(-36.3569);
        expect(weather.id).toBe(800);
        expect(weather.main).toBe("Clear");
        expect(weather.description).toBe("cielo claro");
    });
});
