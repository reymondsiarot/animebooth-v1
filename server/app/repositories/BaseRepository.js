const { jikanAPI } = require("../http/index");
const { v4: uuidv4 } = require("uuid");
const { Anime, Genre, Episode } = require("../../database/models");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }
  fetchAPI = async (url) => {
    try {
      return (await jikanAPI.get(url)).data;
    } catch (err) {
      return false;
    }
  };
  findOne = async (id) => {
    try {
      return await this.model.findOne({ where: { mal_id: id } });
    } catch (err) {
      return false;
    }
  };

  upsert = async (values, condition) => {
    try {
      const model = await this.model.findOne({ where: condition });
      // update
      if (model) {
        return await this.model.update(values, { where: condition });
      }
      // insert
      const animeCreated = await this.model.create({
        ...values,
        anime_link: values.title.split(" ").join("_").toLowerCase(),
      });
      animeCreated.anime_link += "-" + animeCreated.id;
      await Genre.bulkCreate(animeCreated.genres, {
        ignoreDuplicates: true,
      });

      animeCreated.save();
      return animeCreated;
    } catch (er) {
      return er;
    }
  };

  create = async (data) => {
    return await this.model.create(data);
  };
  bulkCreate = async (data) => {
    const model = await this.model.findAll({
      where: { mal_id: data.map((item) => item.mal_id) },
    });
    const ndata = data.filter(
      (item) => !model.find((i) => i.mal_id == item.mal_id)
    );
    return this.model.bulkCreate(ndata, { ignoreDuplicates: true });
  };
}

module.exports = BaseRepository;
