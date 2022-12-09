const { sqlDataSource } = require("./data-source");

const getListByMovieId = async (movieId) => {
  let whereClause;
  if (movieId) {
    whereClause = `WHERE m.id = ${movieId}`;
  } else {
    whereClause = "";
  }

  return await sqlDataSource.query(
    `SELECT
	m.id mi,
	m.title,
	JSON_ARRAYAGG(JSON_OBJECT(
    "movieOption_id",mo.id,
		"branch",branches.name,
		"region",regions.name,
		"date",d.name,
		"time",t.name)) AS detail
FROM movieOptions mo
LEFT JOIN dates_times dt ON mo.dates_time_id = dt.id
LEFT JOIN dates d ON dt.date_id = d.id
LEFT JOIN times t ON dt.time_id = t.id
LEFT JOIN movies_branches_rooms mbr ON mo.movies_branches_room_id = mbr.id
LEFT JOIN movies m ON mbr.movie_id = m.id
LEFT JOIN branches ON mbr.branch_id = branches.id
LEFT JOIN regions ON branches.region_id = regions.id
${whereClause}
GROUP BY m.id
    `
  );
};

const getAllList = async () => {
  return sqlDataSource.query(
    `SELECT 
    r.id region_id,
    r.name,
    JSON_ARRAYAGG(JSON_OBJECT(
        "branch_id",b.id,
        "branch_name",b.name)) AS location
    FROM regions r
    RIGHT JOIN branches b ON b.region_id = r.id
    GROUP BY region_id
    `
  );
};

module.exports = { getListByMovieId, getAllList };
