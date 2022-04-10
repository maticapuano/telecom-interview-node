const { ForecastWeatherService } = require("./forecast-weather.service");

describe("ForecastWeatherService", () => {
    let forecastWeatherService;

    beforeEach(() => {
        forecastWeatherService = new ForecastWeatherService();

        forecastWeatherService.forecastWeather = jest.fn().mockReturnValue(
            Promise.resolve({
                list: [
                    {
                        dt: 1649559600,
                        main: {
                            temp: 18.83,
                            feels_like: 19.12,
                            temp_min: 18.74,
                            temp_max: 18.83,
                            pressure: 1016,
                            sea_level: 1016,
                            grnd_level: 1014,
                            humidity: 90,
                            temp_kf: 0.09,
                        },
                        weather: [
                            {
                                id: 800,
                                main: "Clear",
                                description: "cielo claro",
                                icon: "01n",
                            },
                        ],
                        clouds: {
                            all: 0,
                        },
                        wind: {
                            speed: 5.79,
                            deg: 62,
                            gust: 10.13,
                        },
                        visibility: 10000,
                        pop: 0,
                        sys: {
                            pod: "n",
                        },
                        dt_txt: new Date().toISOString(),
                    },
                ],
            }),
        );
    });

    it("should be defined", () => {
        expect(forecastWeatherService).toBeDefined();
    });

    it("should return a forecast weather", async () => {
        const forecastWeather = await forecastWeatherService.forecastWeather();
        const [forecast] = forecastWeather.list;

        expect(forecastWeather).toBeDefined();
        expect(forecastWeather.list).toBeDefined();
        expect(forecastWeather.list.length).toBe(1);
        expect(forecast).toBeDefined();
        expect(forecast.dt).toBe(1649559600);
        expect(forecast.main).toBeDefined();
        expect(forecast.main.temp).toBe(18.83);
        expect(forecast.main.feels_like).toBe(19.12);
        expect(forecast.main.temp_min).toBe(18.74);
    });
});
