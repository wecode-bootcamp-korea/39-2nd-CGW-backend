-- migrate:up
CREATE TABLE movieOptions_seats_orders
(
    `id`              int    NOT NULL    AUTO_INCREMENT, 
    `movieOptions_seat_id`  int    NOT NULL, 
    `order_id`         int    NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (movieOptions_seat_id)
        REFERENCES movieOptions_seats (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down
DROP TABLE movieOptions_seats_orders
