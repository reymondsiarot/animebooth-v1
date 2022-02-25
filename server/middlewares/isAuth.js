const { cryptoEncode, cryptoDecode } = require("../helpers/cryptoData");
const jwt = require("jsonwebtoken");
const privateKey = require("../helpers/keys");

module.exports = (req, res, next) => {
  try {
    const userToken = req.cookies._token || null;
    if (userToken) {
      const decoded = jwt.verify(cryptoDecode(userToken), privateKey);
      if (decoded) return next();
    }
  } catch (er) {}
  res.status(401).send({
    success: false,
    message: "Unauthorized",
  });
};
