const { Router } = require("express");
const locationRouter = require("../../../../../modules/location/infra/http/routes/location.route");

const v1Router = Router();

v1Router.use("/location", locationRouter);

module.exports = v1Router;
