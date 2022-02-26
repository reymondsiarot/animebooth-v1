const AuthRepository = require("../repositories/AuthRepository");
const { Roles } = require("../../database/models");
class AuthController {
  admin = async (req, res) => {
    try {
      const userData = JSON.parse(req.user);
      const user = await AuthRepository.model.create(
        {},
        {
          include: ["Roles"],
        }
      );
      console.log("user", user);
      res.send(user);
    } catch (er) {
      console.log(er);
      res.send(er);
    }
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
