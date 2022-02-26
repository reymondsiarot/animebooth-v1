const { cryptoEncode, cryptoDecode } = require("./cryptoData");
const jwt = require("jsonwebtoken");
const { accessKey, refreshAccessKey } = require("./keys");
const moment = require("moment");

generateAccessToken = async (data, expired = "15") => {
  const token = await jwt.sign(
    { data, exp: moment().add(expired, "seconds").unix() },
    accessKey
  );
  return token;
};
generateRefreshToken = async (data) => {
  const token = await jwt.sign({ data }, refreshAccessKey);
  return token;
};

// function to set cookies for user and token

module.exports = async (data, expired = "15", res, req) => {
  const token = await generateAccessToken(data, expired);
  const refreshToken = await generateRefreshToken(data);
  const combinedToken = {
    token,
    refreshToken,
  };

  // stringify combinedToken
  const tokenString = JSON.stringify(combinedToken);
  res.cookie("_token", cryptoEncode(tokenString), {
    httpOnly: true,
  });
  res.cookie("user", JSON.stringify(data), {
    httpOnly: false,
  });

  //save refresh token to redis
  const redis = req.redis;
  redis.set(refreshToken, "1");
  console.log("SETTING REFRESH TOKEN :", refreshToken);
  return combinedToken;
};
