var express = require("express");
const AnimeController = require("../app/controllers/AnimeController");
var router = express.Router();

router.get("/anime", AnimeController.anime);
router.get("/anime/:id", AnimeController.animeById);

module.exports = router;
