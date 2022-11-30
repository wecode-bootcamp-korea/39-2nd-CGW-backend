-- migrate:up
CREATE TABLE regions_movies
(
    `id`         int            NOT NULL    AUTO_INCREMENT, 
    `movie_id`   int            NOT NULL, 
    `region_id`  int            NOT NULL, 
    PRIMARY KEY (id)
    CONSTRAINT  FOREIGN KEY (region_id)
        REFERENCES regions (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
    CONSTRAINT  FOREIGN KEY (movie_id)
        REFERENCES movies (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
);


-- migrate:down

DROP TABLE regions_movies;
