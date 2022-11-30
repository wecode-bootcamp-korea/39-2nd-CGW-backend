const express = require("express");
const router = express.Router();
const kakaoRouter = require("./kakao.router");

router.use("/kakaoPayment", kakaoRouter.router);

module.exports = { router };
