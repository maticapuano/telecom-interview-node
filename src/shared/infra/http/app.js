const express = require("express");
const v1Router = require("./routes/v1");
const swaggerDocsRouter = require("./routes/swagger-docs.route");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use("/v1", v1Router);
app.use("/docs", swaggerDocsRouter);

module.exports = app;
