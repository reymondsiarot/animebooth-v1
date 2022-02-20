var express = require("express");
const AnimeController = require("../app/controllers/AnimeController");
const WatchController = require("../app/controllers/WatchController");
var router = express.Router();

router.get("/anime", AnimeController.anime);
router.get("/anime/genres", AnimeController.animeGenres);
router.get("/anime/:id", AnimeController.animeById);

router.get("/watch/:animeLink", WatchController.watch);
router.get("/getAnime", AnimeController.animeHello);
module.exports = router;
