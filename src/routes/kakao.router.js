const express = require("express");
const router = express.Router();
const kakaoController = require("../controllers/kakao.controller");

router.post("", kakaoController.paymentReady);
router.post("/approval", kakaoController.approval);


module.exports = { router };