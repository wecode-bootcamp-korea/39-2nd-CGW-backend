const { sqlDataSource } = require("./data-source");

const createOrders = async (data, userId, totalPrice, movieOptionsSeatId, tid) => {
  await sqlDataSource.manager.transaction(async (transactionalEntityManager) => {
    await transactionalEntityManager.query(
      `    
      INSERT INTO orders (
        tid,
        totalPrice,
        user_id,
        orderStatus_id
      ) VALUES (
        ?,
        ?,
        ?,
        1
      );
      `,
      [tid, totalPrice, userId]
    );
    
    const [getOrderId] = await transactionalEntityManager.query(
      `
      SELECT id
        FROM orders o
        WHERE o.user_id = ?
        ORDER BY created_at DESC LIMIT 1;
      `,
      [userId]
      );

    await movieOptionsSeatId.map(seats => {
      transactionalEntityManager.query(
        `
        INSERT INTO movieOptions_seats_orders (
          order_id,
          movieOptions_seat_id
        ) VALUES (
          ?,
          ?
        );
        `,
        [ getOrderId["id"], seats ]
      );
    });
  });
};

module.exports = { createOrders };