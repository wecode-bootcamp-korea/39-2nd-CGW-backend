const { compareSync } = require("bcrypt");
const { sqlDataSource } = require("./data-source");

const getTimeBymovieIdAndbranchIdAndDate = async (movie_id, branch_id) => {
  return await sqlDataSource.query(
    `
    SELECT 
	d.id,
	d.name,
    JSON_ARRAYAGG(
        JSON_OBJECT(
        "time_id",t.id,
        "date",d.name,
        "time",t.name)) AS time
FROM movies m
LEFT JOIN movies_branches_rooms mbr ON m.id = mbr.movie_id
LEFT JOIN movieOptions mo ON mbr.id = mo.movies_branches_room_id
LEFT JOIN dates_times dt ON dt.id = mo.dates_time_id
LEFT JOIN dates d ON d.id = dt.date_id
LEFT JOIN times t ON dt.time_id = t.id
LEFT JOIN branches ON branches.id = mbr.branch_id
LEFT JOIN regions ON branches.region_id = regions.id
WHERE m.id = ? AND branches.id = ?
GROUP BY d.id
    `,
    [movie_id, branch_id]
  );
};

const getDetail = async (movie_id) => {
  return await sqlDataSource.query(
    `
    SELECT
    m.thumbnail,
    m.title,
    m.rate,
    m.ageLimit
    FROM movies m
    WHERE m.id = ?
    `,
    [movie_id]
  );
};

const getMovieOptionId = async (movie_id, branch_id, date_id, time_id) => {
  const [movies_branched_rooms_id] = await sqlDataSource.query(
    `
    SELECT
        mbr.id as mbr_id
    FROM movies_branches_rooms mbr
    WHERE movie_id = ? AND branch_id = ?
    `,
    [movie_id, branch_id]
  );

  const [dates_times_id] = await sqlDataSource.query(
    `
      SELECT
          dt.id as dt_id
      FROM dates_times dt
      WHERE date_id = ? AND time_id = ?
      `,
    [date_id, time_id]
  );
  const { mbr_id } = movies_branched_rooms_id;
  const { dt_id } = dates_times_id;

  const [movie_option_id] = await sqlDataSource.query(
    `
    SELECT
        mo.id as movieOption_id
    FROM movieOptions mo
    WHERE movies_branches_room_id = ${mbr_id} AND dates_time_id = ${dt_id}
    `
  );
  const { movieOption_id } = movie_option_id;

  const [mo_id] = await sqlDataSource.query(
    `
	SELECT
        JSON_ARRAYAGG(mos.seat_id) as reserved_seat_id
    FROM movieOptions_seats mos
    WHERE movieOption_id = ${movieOption_id}
    `
  );
  const { reserved_seat_id } = mo_id;
  const [seats] = await sqlDataSource.query(
    `
    SELECT
    JSON_ARRAYAGG(JSON_OBJECT(
      "id",id,
      "name",name)) as seat
    FROM seats
    `
  );
  const { seat } = seats;

  const [movies] = await sqlDataSource.query(
    `
    SELECT
    JSON_ARRAYAGG(JSON_OBJECT(
      "title",m.title,
      "thumbnail",m.thumbnail)) as movie
    FROM movies m
    WHERE m.id = ?
    `,
    [movie_id]
  );
  const { movie } = movies;

  return { movieOption_id, reserved_seat_id, seat, movie };
};

module.exports = { getTimeBymovieIdAndbranchIdAndDate, getDetail, getMovieOptionId };
