# Telecom - Technical Documentation

## Index

-   [Introduction](#Introduction)
-   [Features](#Features)
-   [Architecture](#Architecture)
-   [Installation](#Installation)
-   [API Documentation](#API-Documentation)
-   [Testing](#Testing)
-   [Deployment](#Deployment)
-   [Credits](#Credits)

## Introduction

Is a simple weather forecast application that provides the current weather forecast and the next 5 days forecast for the current city.

The application has been developed using Node.js and the following libraries:

-   [Express](https://expressjs.com/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [OpenWeatherMap API](https://openweathermap.org/api)

## Features

-   Get the current weather forecast and the next 5 days forecast for the current city.
-   Get the current weather using the user's IP or city provided.
-   The current city is detected using the user's IP address.

## Architecture

The application follows the Modules Arquitecture pattern.

The Modules Arquitecture pattern is a variation of the Model View Controller (MVC) pattern. In the Modules Arquitecture pattern, the Controller and the View components are further divided into smaller subcomponents. This results in a more modular and extensible design.

## Installation

1. Clone the project from Github.
2. Install the dependencies using `npm install`.
3. Copy `.env.sample` to `.env` and add your OpenWeatherMap API key.
4. Run the application using `npm start:dev` or `npm start.

## API Documentation

The application provides the following API endpoints:

-   `GET /location`: Returns the current city, longitude, latitude from [current IP](http://ip-api.com/).
-   `GET /current`: Returns the location data and the current weather forecast for the specified city.
-   `GET /forecast`: Returns the location data and the 5 days forecast for the specified city.

## Deployment

The application is deployed on Heroku.

[View docs](https://telecom-interview-node.herokuapp.com/docs)

## Credits

-   [OpenWeatherMap API](https://openweathermap.org/api)
-   [ip-api](https://ip-api.com/)

## License

The application is released under the [MIT License](https://github.com/maticapuano/telecom-interview-node/blob/master/LICENSE).

## Author

Matías Capuano

-   [Github](https://github.com/maticapuano)
-   [LinkedIn](https://www.linkedin.com/in/matias-capuano/)
