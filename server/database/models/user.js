"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //create password compare function

  User.init(
    {
      roles: DataTypes.JSON,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      banned_until: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.prototype.comparePassword = function (password) {
    return password === this.password;
  };
  return User;
};
