const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const initVector = crypto
  .createHash("sha256")
  .update(String("init-vector-key-secret"))
  .digest("base64")
  .substr(0, 16);
const Securitykey = crypto
  .createHash("sha256")
  .update(String("security-key-secret"))
  .digest("base64")
  .substr(0, 32); // crypto.randomBytes(32);

console.log("Securitykey", Securitykey.toString("hex"));
console.log("initVector", initVector);
module.exports = {
  cryptoEncode: (data) => {
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(data, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;
  },
  cryptoDecode: (data) => {
    const decipher = crypto.createDecipheriv(
      algorithm,
      Securitykey,
      initVector
    );
    let decryptedData = decipher.update(data, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
  },
};
