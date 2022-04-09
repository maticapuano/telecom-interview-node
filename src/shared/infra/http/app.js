const express = require("express");
const v1Router = require("./routes/v1");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", v1Router);

module.exports = app;
