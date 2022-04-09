const { Router } = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../../../../swagger.json");

const swaggerDocsRouter = Router();

swaggerDocsRouter.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = swaggerDocsRouter;
