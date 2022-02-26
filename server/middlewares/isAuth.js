const { cryptoDecode } = require("../helpers/cryptoData");
const jwt = require("jsonwebtoken");
const { accessKey, refreshAccessKey } = require("../helpers/keys");
const authLogin = require("../helpers/authLogin");
const { User } = require("../database/models");
module.exports = async (req, res, next) => {
  try {
    const userToken =
      req.cookies._token &&
      (JSON.parse(cryptoDecode(req.cookies._token)) || null);
    const user = req.cookies.user || null;

    if (!user) {
      // remove cookie token
      res.clearCookie("_token");
      return res.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }

    if (userToken && userToken.token && userToken.refreshToken) {
      const decoded = await jwt.verify(userToken.token, accessKey);

      if (decoded) {
        return next();
      }
    }
  } catch (er) {
    try {
      if (er.message === "jwt expired") {
        const userToken =
          req.cookies._token &&
          (JSON.parse(cryptoDecode(req.cookies._token)) || null);

        const decodedRefreshToken = await jwt.verify(
          userToken.refreshToken,
          refreshAccessKey
        );
        if (decodedRefreshToken) {
          console.log(
            "GETTING REFRESH TOKEN FROM REDIS",
            userToken.refreshToken
          );
          // check if refresh token is still valid
          const redis = req.redis;
          const isValid = await redis.get(userToken.refreshToken);
          if (isValid) {
            // find user from refresh token
            const user = await User.findOne({
              where: {
                id: decodedRefreshToken.data.id,
              },
            });
            if (user) {
              const data = {
                id: user.id,
                email: user.email,
              };
              // generate new access token
              await authLogin(data, "15", res, req);
              await redis.del(userToken.refreshToken);
            }
            return next();
          }
        }
      }
    } catch (er) {}

    console.log("EXP");
  }
  // remove cookie token
  res.clearCookie("_token");
  res.clearCookie("user");

  res.status(401).send({
    success: false,
    message: "Unauthorized",
  });
};
