const { createDiffieHellman } = require("crypto");
const { User } = require("../../database/models");
const BaseRepository = require("./BaseRepository");
class AuthRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  register = async (data) => {
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

      const created = await this.model.create(data, {
        attributes: {
          exclude: ["password"],
        },
      });

      return { success: !!created, data: created };
    } catch (er) {
      return er;
    }
  };
}

module.exports = new AuthRepository(User);
