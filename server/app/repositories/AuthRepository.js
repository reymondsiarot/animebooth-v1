const { createDiffieHellman } = require("crypto");
const { User } = require("../../database/models");
const authLogin = require("../../helpers/authLogin");
const BaseRepository = require("./BaseRepository");
const randomColor = require("randomcolor"); // import the script

class AuthRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
  login = async (email, password, res, req) => {
    try {
      if (!email) return { success: false, message: "Please enter email" };
      if (!password)
        return { success: false, message: "Please enter password" };
      const user = await this.model.findOne({ where: { email } });

      if (user) {
        const match = await user.comparePassword(password);
        if (match) {
          await authLogin(
            {
              id: user.id,
              email: user.email,
              avatarColor: user.avatarColor,
            },
            "15",
            res,
            req
          );
          return { success: true, message: "Login success", data: user };
        }
      }
      return { success: false, message: "Username or password is incorrect" };
    } catch (er) {
      return { success: false, message: "error" };
    }
  };

  register = async (data, res, req) => {
    try {
      const passwordValidation = this.validate(
        !data.password,
        "Please specify a password"
      );
      if (!passwordValidation.success) return passwordValidation;
      const passwordValidation1 = this.validate(
        data.password !== data.cpassword || !data.cpassword,
        "Password not match"
      );
      if (!passwordValidation1.success) return passwordValidation1;

      const emailValidation = this.validate(
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email),
        "Email is not valid"
      );
      if (!emailValidation.success) return emailValidation;

      const user = await User.findOne({ where: { email: data.email } });
      if (user) return { success: false, message: "Email already exists" };

      const color = randomColor({
        luminosity: "dark",
        hue: "red",
      });
      const created = await this.model.create(
        { ...data, avatarColor: color },
        {},
        { include: ["roles"] }
      );

      if (!!created) {
        await authLogin(
          {
            id: created.id,
            email: created.email,
            avatarColor: created.avatarColor,
          },
          "15",
          res,
          req
        );
      }
      return { success: !!created, data: created };
    } catch (er) {
      return er;
    }
  };
}

module.exports = new AuthRepository(User);
