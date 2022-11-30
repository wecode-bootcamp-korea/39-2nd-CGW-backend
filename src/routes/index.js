const express = require("express");
const router = express.Router();
const kakaoRouter = require("./kakao.router");

router.use("/kakaoPayment", kakaoRouter.router);

const userRouter = require("./userRouter");

router.use("/users", userRouter);
module.exports = { router };
