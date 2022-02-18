"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Episode.init(
    {
      anime_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      video: DataTypes.STRING,
      trailer_video: DataTypes.STRING,
      banner: DataTypes.STRING,
      icon: DataTypes.STRING,
      episode_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Episode",
    }
  );
  return Episode;
};
