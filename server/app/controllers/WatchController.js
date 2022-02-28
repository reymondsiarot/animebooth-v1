const AnimeRepository = require("../repositories/AnimeRepository");

class WatchController {
  constructor() {}
  watch = async (req, res) => {
    const data = await AnimeRepository.findOne(req.body.id);
    return res.send("hellow");
  };
}

module.exports = new WatchController();
