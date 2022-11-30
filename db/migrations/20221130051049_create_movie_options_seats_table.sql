-- migrate:up
CREATE TABLE movie_options_seats
(
    `id`               int             NOT NULL    AUTO_INCREMENT, 
    `movie_option_id`  int             NOT NULL, 
    `seat_id`          int             NOT NULL, 
    `price_id`         int             NOT NULL, 
    `user_id`          int             NOT NULL, 
    `payment_id`       int             NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (movie_option_id)
        REFERENCES movie_options (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (seat_id)
        REFERENCES seats (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (price_id)
        REFERENCES price (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (payment_id)
        REFERENCES payment (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down

DROP TABLE movie_options_seats;
