const movieOptionDao = require("../models/movie.option.model");
const getMovieOptionId = async (movie_id, branch_id, date_id, time_id) => {
  return await movieOptionDao.getMovieOptionId(movie_id, branch_id, date_id, time_id);
};
const inputSeatData = async (movieOption_id, seat_id, price_id) => {
  return await movieOptionDao.inputSeatData(movieOption_id, seat_id, price_id);
};

module.exports = { getMovieOptionId, inputSeatData };
