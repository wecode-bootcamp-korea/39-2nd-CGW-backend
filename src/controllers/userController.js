const { catchAsync } = require("../utils/errors");
const userService = require("../services/userService");

const signin = catchAsync(async (req, res) => {
  const { KAKAO_CODE } = req.body;
  const { jwtToken, flag, info } = await userService.signinWithKakao(KAKAO_CODE);
  return res.status(200).json({ jwtToken, flag, info });
});
const signup = async (req, res) => {
  const user = req.user;
  const { kakaoId, name, phone, birth } = req.body;

  if (!phone || !birth || !name) {
    throw new Error("KEY_ERROR");
  }
  await userService.signup(kakaoId, name, phone, birth);
  return res.status(201).json({ messeage: "created" });
};

const getUserInfo = async (req, res) => {
  const user = req.user;
  const userInfo = await userService.getUserInfo(user);

  return res.status(200).json(userInfo);
};
module.exports = { signin, signup, getUserInfo };
