const express = require("./app/app.js");
const db = require("./database/models");

// make bluebird default Promise
Promise = require("bluebird"); // eslint-disable-line no-global-assign

const port = process.env.PORT || 8000;

// Test DB
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.listen(port, function () {
  console.log("SERVER RUNNGIN ON : http://localhost:" + port);
});
