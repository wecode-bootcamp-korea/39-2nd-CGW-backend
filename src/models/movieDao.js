const { sqlDataSource } = require("./data-source");

const getAllList = async () => {
  return await sqlDataSource.query(
    `SELECT
        id,
        title,
        thumbnail,
        rate,
        ticketRate
    FROM movies`
  );
};

module.exports = { getAllList };
