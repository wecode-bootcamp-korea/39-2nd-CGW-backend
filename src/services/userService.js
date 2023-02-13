const userDao = require("../models/userDao");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const signinWithKakao = async (code) => {
  const requestTokenToKakao = {
    method: "post",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    data: {
      client_id: "b0b0a32482b4cef586121097d9d601cf",
      code: code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:3000/login/oauth",
    },
  };
  const response = await axios(
    requestTokenToKakao,
    {},
    {
      withCredentials: true,
    }
  ).then((response) => response.data);

  const axiosRequest = {
    method: "GET",
    url: "https://kapi.kakao.com/v2/user/me",
    headers: {
      Authorization: `Bearer ${response.access_token}`,
    },
  };

  const getKakaoUserInfo = await axios(axiosRequest, {
    withCredentials: true,
  });
  const { id } = getKakaoUserInfo.data;
  const { profile, email } = getKakaoUserInfo.data.kakao_account;

  const emailCheck = await userDao.getUserbyEmail(email);

  let flag = false;
  let info;

  if (!emailCheck) {
    const result = await userDao.createUser(profile.nickname, email, id);
    info = await userDao.getUserInfoByUserId(result.insertId);
    flag = true;
  }
  const user = await userDao.getUserBySocialId(id);
  const jwtToken = jwt.sign({ id: user.social_id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return { jwtToken, flag, info };
};

const signup = async (kakaoId, name, phone, date) => {
  const user = userDao.updateUserInfo(kakaoId, name, phone, date);
  return user;
};

const getUserBySocialId = async (id) => {
  const user = await userDao.getUserBySocialId(id);
  return user;
};

const getUserInfo = async (user) => {};

module.exports = { signinWithKakao, signup, getUserBySocialId, getUserInfo };
