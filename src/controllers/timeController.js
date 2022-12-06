const timeService = require("../services/timeService");
const { catchAsync } = require("../utils/errors");
const getTimeBymovieIdAndbranchIdAndDate = async (req, res) => {
  const { movie_id, branch_id } = req.params;

  const timeList = await timeService.getTimeBymovieIdAndbranchIdAndDate(movie_id, branch_id);
  return res.status(200).json(timeList);
};

const getDetail = async (req, res) => {
  const { movie_id } = req.params;

  const detail = await timeService.getDetail(movie_id);
  return res.status(200).json(detail);
};

const getMovieOptionId = catchAsync(async (req, res) => {
  const { movie_id, branch_id, date_id, time_id } = req.params;

  const { movieOption_id, reserved_seat_id, seat, movie } = await timeService.getMovieOptionId(
    movie_id,
    branch_id,
    date_id,
    time_id
  );

  return res.status(200).json({ movieOption_id, reserved_seat_id, seat, movie });
});

module.exports = { getTimeBymovieIdAndbranchIdAndDate, getDetail, getMovieOptionId };
