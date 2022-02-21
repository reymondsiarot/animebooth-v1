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
        data.password !== data.cpassword && !!data.cpassword,
        "Password not match"
      );
      if (!passwordValidation1.success) return passwordValidation1;

      const usernameValidation = this.validate(
        username.search(/[^a-zA-Z0-9_]/g) !== -1,
        "Username is not valid"
      );
      if (!usernameValidation.success) return usernameValidation;
      const emailValidation = this.validate(
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email is not valid"
      );
      console.log("AWd");
      if (!emailValidation.success) return emailValidation;

      let created = await this.model.create(data);
      return created;
    } catch (er) {
      return er;
    }
  };
}

module.exports = new AuthRepository(User);
