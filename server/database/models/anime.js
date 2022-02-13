"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anime.init(
    {
      mal_id: DataTypes.INTEGER,
      url: DataTypes.STRING,
      images: DataTypes.JSON,
      trailer: DataTypes.JSON,
      title: DataTypes.STRING,
      title_english: DataTypes.STRING,
      title_japanese: DataTypes.STRING,
      title_synonyms: DataTypes.JSON,
      type: DataTypes.STRING,
      source: DataTypes.STRING,
      episodes: DataTypes.INTEGER,
      status: DataTypes.STRING,
      airing: DataTypes.BOOLEAN,
      aired: DataTypes.JSON,
      duration: DataTypes.STRING,
      rating: DataTypes.STRING,
      score: DataTypes.STRING,
      scored_by: DataTypes.INTEGER,
      rank: DataTypes.INTEGER,
      popularity: DataTypes.INTEGER,
      members: DataTypes.INTEGER,
      favorites: DataTypes.INTEGER,
      synopsis: DataTypes.STRING,
      background: DataTypes.STRING,
      premiered: DataTypes.STRING,
      broadcast: DataTypes.JSON,
      related: DataTypes.JSON,
      producers: DataTypes.JSON,
      licensors: DataTypes.JSON,
      studios: DataTypes.JSON,
      genres: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Anime",
    }
  );
  return Anime;
};
