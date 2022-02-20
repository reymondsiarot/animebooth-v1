const server = require("./app/app.js");
const db = require("./database/models");
// make bluebird default Promise
Promise = require("bluebird"); // eslint-disable-line no-global-assign
// Test DB
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

db.Anime.hasMany(db.Episode, {
  foreignKey: "anime_id",
});

const typeDefs = require("./app/grapql/typedefs");
const resolvers = require("./app/grapql/resolvers");
server(typeDefs, resolvers);
