const apollo = require("./apollo");

module.exports = function (typeDefs, resolvers) {
  return apollo(typeDefs, resolvers);
};
