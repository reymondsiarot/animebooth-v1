const authLogin = require("../../helpers/authLogin");
const AuthRepository = require("../repositories/AuthRepository");

class AuthController {
  admin = async (req, res) => {
    res.send("success");
  };
  login = async (req, res) => {};
  register = async (req, res) => {
    const response = await AuthRepository.register(req.body);
    if (response.success) {
      await authLogin(
        {
          id: response.data.id,
          email: response.data.email,
        },
        "10",
        res
      );
    }

    res.send(response);
  };
}

module.exports = new AuthController();
