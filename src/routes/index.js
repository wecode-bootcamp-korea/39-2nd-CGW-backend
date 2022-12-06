const express = require("express");
const router = express.Router();
const kakaoRouter = require("./kakao.router");

router.use("/kakaoPayment", kakaoRouter.router);

const userRouter = require("./userRouter");

router.use("/users", userRouter);
const movieRouter = require("./movieRouter");
const locationRouter = require("./locationRouter");
const timeRouter = require("./timeRouter");
const movieOptionRouther = require("./movie.option.router");

router.use("/movies", movieRouter);
router.use("/locations", locationRouter);
router.use("/times", timeRouter);
router.use("/movieOptions", movieOptionRouther);
module.exports = { router };
