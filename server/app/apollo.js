const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const redis = require("./redis");
module.exports = async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  app.use(cookieParser());
  app.use(
    cors({
      origin: ["http://localhost:8080"],
      credentials: true,
    })
  );
  app.use(bodyParser.json());
  app.use(compression());
  app.use(redis);
  app.use(require("../routes/routes"));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};
