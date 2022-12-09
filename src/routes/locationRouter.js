const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");

router.get("", locationController.getListByMovieId);
router.get("/lists", locationController.getAllList);

module.exports = router;
