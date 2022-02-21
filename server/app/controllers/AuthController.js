const AuthRepository = require("../repositories/AuthRepository");
class AuthController {
  login = async (req, res) => {};
  register = async (req, res) => {
    const response = await AuthRepository.register(req.body, res);
    res.send(response);
  };
}

module.exports = new AuthController();
