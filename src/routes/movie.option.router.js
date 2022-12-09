const express = require("express");
const router = express.Router();
const movieOptionController = require("../controllers/movie.option.controller");

router.post("", movieOptionController.inputSeatData);

module.exports = router;
