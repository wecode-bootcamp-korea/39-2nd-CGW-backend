const { sqlDataSource } = require("./data-source");

const inputSeatData = async (movieOption_id, seat_id, price_id) => {
  await seat_id.map((seat) => {
    sqlDataSource.query(
      `
      INSERT INTO movieOptions_seats(
        movieOption_id,
        seat_id,
        price_id
        ) 
      VALUES (?, ?, ?) 
      `,
      [movieOption_id, seat, price_id]
    );
  });
};

module.exports = { inputSeatData };
