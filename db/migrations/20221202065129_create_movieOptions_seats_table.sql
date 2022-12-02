-- migrate:up
CREATE TABLE movieOptions_seats
(
    `id`              int    NOT NULL    AUTO_INCREMENT, 
    `movieOption_id`  int    NOT NULL, 
    `seat_id`         int    NOT NULL, 
    `user_id`         int    NOT NULL, 
    `price_id`        int    NOT NULL, 
     PRIMARY KEY (id),
     CONSTRAINT  FOREIGN KEY (movieOption_id)
        REFERENCES movieOptions (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (seat_id)
        REFERENCES seats (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (price_id)
        REFERENCES prices (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT  

);

-- migrate:down
DROP TABLE movieOptions_seats

