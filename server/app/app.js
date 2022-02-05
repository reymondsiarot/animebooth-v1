const express = require("express");
var compression = require("compression");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(compression());
app.use(require("../routes"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("No corresponding route found");
  var err = new Error("Resource Not Found");
  err.status = 404;
  next(err);
});

// error handlers

app.use(function (e, req, res, next) {
  let status = e.status || 500;
  let error = { message: e.message };

  if (app.get("env") === "development") {
    error.message = status + " " + e;
    res.status(status).send(e.stack);
  } else {
    console.log(error);
    res.status(status).json(error);
    f;
  }
});

module.exports = function () {
  return app;
};
