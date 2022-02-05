const axios = require("../config/axios");
class BaseRepository {
  constructor(model) {
    this.model = model;
  }
  fetchAPI = async (url) => {
    try {
      return (await axios.get(url)).data;
    } catch (err) {
      return false;
    }
  };
  create(data) {
    return this.model.create(data);
  }
}

module.exports = BaseRepository;
