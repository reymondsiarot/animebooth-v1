const AuthRepository = require("../repositories/AuthRepository");

class AuthController {
  admin = async (req, res) => {
    res.send("success");
  };
  login = async (req, res) => {
    const { email, password } = req.body;
    const response = await AuthRepository.login(email, password, res, req);
    res.send(response);
  };
  register = async (req, res) => {
    const response = await AuthRepository.register(req.body, res, req);
    res.send(response);
  };
  logout = async (req, res) => {
    res.clearCookie("_token");
    res.clearCookie("user");
    res.send({
      success: true,
      message: "Logout success",
    });
  };
}

module.exports = new AuthController();
