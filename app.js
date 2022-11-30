const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { router } = require("./src/routes");
const { globalErrorHandler } = require("./src/utils/errors");

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  app.use(router);
  app.use(globalErrorHandler);
  return app;
};

module.exports = { createApp };
