const locationDao = require("../models/locationDao");

const getListByMovieId = async (movieId) => {
  return await locationDao.getListByMovieId(movieId);
};
const getAllList = async () => {
  return await locationDao.getAllList();
};

module.exports = { getListByMovieId, getAllList };
