const locationService = require("../services/locationService");

const getListByMovieId = async (req, res) => {
  const { movieId } = req.query;

  const movieList = await locationService.getListByMovieId(movieId);
  return res.status(200).json(movieList);
};
const getAllList = async (req, res) => {
  const movieList = await locationService.getAllList();
  return res.status(200).json(movieList);
};

module.exports = { getListByMovieId, getAllList };
