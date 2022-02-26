const { createClient } = require("redis");

const client = createClient();
async function initRedis() {
  client.on("error", (err) => console.log("Redis Client Error", err));
  client.on("ready", () => console.log("REDIS IS READY"));
  await client.connect();
}
initRedis();

module.exports = async (req, res, next) => {
  req.redis = client;

  next();
};
