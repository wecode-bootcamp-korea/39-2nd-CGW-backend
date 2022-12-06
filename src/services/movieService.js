const movieDao = require("../models/movieDao");

const getAllList = async () => {
  return await movieDao.getAllList();
};

module.exports = { getAllList };
