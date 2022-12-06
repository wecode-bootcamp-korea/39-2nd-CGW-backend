const movieService = require("../services/movieService");

const getAllList = async (req, res) => {
  const movieList = await movieService.getAllList();
  return res.status(200).json(movieList);
};

module.exports = { getAllList };
