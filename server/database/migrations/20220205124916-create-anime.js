"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Animes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mal_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      anime_link: {
        type: Sequelize.STRING,
        unique: true,
      },
      url: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.JSON,
      },
      trailer: {
        type: Sequelize.JSON,
      },

      title: {
        type: Sequelize.STRING,
      },
      title_english: {
        type: Sequelize.STRING,
      },
      title_japanese: {
        type: Sequelize.STRING,
      },
      title_synonyms: {
        type: Sequelize.JSON,
      },
      type: {
        type: Sequelize.STRING,
      },
      source: {
        type: Sequelize.STRING,
      },
      episodes: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      airing: {
        type: Sequelize.BOOLEAN,
      },
      aired: {
        type: Sequelize.JSON,
      },
      duration: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.STRING,
      },
      score: {
        type: Sequelize.FLOAT,
      },
      scored_by: {
        type: Sequelize.INTEGER,
      },
      rank: {
        type: Sequelize.INTEGER,
      },
      popularity: {
        type: Sequelize.INTEGER,
      },
      members: {
        type: Sequelize.INTEGER,
      },
      favorites: {
        type: Sequelize.INTEGER,
      },

      synopsis: {
        type: Sequelize.STRING,
      },
      background: {
        type: Sequelize.STRING,
      },
      premiered: {
        type: Sequelize.STRING,
      },
      broadcast: {
        type: Sequelize.JSON,
      },
      related: {
        type: Sequelize.JSON,
      },

      producers: {
        type: Sequelize.JSON,
      },
      licensors: {
        type: Sequelize.JSON,
      },
      studios: {
        type: Sequelize.JSON,
      },
      genres: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Animes");
  },
};
