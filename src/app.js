const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init router
app.get("/", (req, res, next) => {
  const strCompress = "Hello world!";
  return res.status(200).json({
    message: "Welcome to learning to build a server by JS!!",
    metadata: strCompress.repeat(100000),
  });
});

// handle error

module.exports = app;
