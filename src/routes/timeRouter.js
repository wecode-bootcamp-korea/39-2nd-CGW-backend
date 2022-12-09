const express = require("express");
const router = express.Router();
const timeController = require("../controllers/timeController");

router.get("/:movie_id/:branch_id", timeController.getTimeBymovieIdAndbranchIdAndDate);
router.get("/:movie_id", timeController.getDetail);
router.get("/:movie_id/:branch_id/:date_id/:time_id", timeController.getMovieOptionId);

module.exports = router;
