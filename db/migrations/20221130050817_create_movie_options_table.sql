-- migrate:up
CREATE TABLE movie_options
(
    `id`                  int            NOT NULL    AUTO_INCREMENT, 
    `regionss_movies_id`  int            NOT NULL, 
    `date`                varchar(20)    NULL, 
    `showtime`            varchar(20)    NULL, 
    PRIMARY KEY (id)
    CONSTRAINT  FOREIGN KEY (regionss_movies_id)
        REFERENCES regions_movies (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
);


-- migrate:down

DROP TABLE movie_options;
