const { default: axios } = require("axios");

const openWeatherMapHttpInstance = () => {
    const instance = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5",
        params: {
            appid: process.env.OPEN_WEATHER_API_KEY,
            lang: process.env.OPEN_WEATHER_API_LANGUAGE,
            units: process.env.OPEN_WEATHER_API_UNITS,
        },
        validateStatus: () => true,
    });

    return instance;
};

module.exports = openWeatherMapHttpInstance;
