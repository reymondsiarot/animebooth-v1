const { jikanAPI } = require("../http/index");
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
      return await this.model.create(values);
    } catch (er) {
      return er;
    }
  };

  create = async (data) => {
    return await this.model.create(data);
  };
  bulkCreate = (data) => {
    return this.model.bulkCreate(data);
  };
}

module.exports = BaseRepository;
