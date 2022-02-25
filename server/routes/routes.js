var express = require("express");
const AnimeController = require("../app/controllers/AnimeController");
const AuthController = require("../app/controllers/AuthController");
const WatchController = require("../app/controllers/WatchController");
const isAuth = require("../middlewares/isAuth");

var router = express.Router();
router.get("/anime", AnimeController.anime);
router.get("/anime/genres", AnimeController.animeGenres);
router.get("/anime/:id", AnimeController.animeById);
router.get("/watch/:animeLink", WatchController.watch);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/admin", isAuth, AuthController.admin);
module.exports = router;
