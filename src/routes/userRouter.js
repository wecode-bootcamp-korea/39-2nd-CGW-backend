const express = require("express");
const router = express.Router();
const { tokenValidator } = require("../utils/TokenValidator");

const userController = require("../controllers/userController");

router.post("/signin", userController.signin);
router.post("/signup", userController.signup);
router.get("/info", tokenValidator, userController.getUserInfo);

module.exports = router;
