var express = require("express");
const AnimeController = require("../app/controllers/AnimeController");
var router = express.Router();

router.get("/", AnimeController.animeList);

module.exports = router;
