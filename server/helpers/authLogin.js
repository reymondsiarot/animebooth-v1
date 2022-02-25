const { cryptoEncode, cryptoDecode } = require("./cryptoData");
const jwt = require("jsonwebtoken");
const privateKey = require("./keys");
const moment = require("moment");

module.exports = async (data, expired = "1", res) => {
  const exp = moment().add(expired, "minutes");
  const token = await jwt.sign(
    {
      exp: exp.unix(),
      data,
    },
    privateKey
  );
  res.cookie("_token", cryptoEncode(token), {
    httpOnly: true,
    expires: exp.toDate(),
  });
};
