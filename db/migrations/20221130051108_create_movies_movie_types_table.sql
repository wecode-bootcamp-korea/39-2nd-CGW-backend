-- migrate:up
CREATE TABLE movies_movie_types
(
    `id`             int    NOT NULL    AUTO_INCREMENT, 
    `movie_id`       int    NOT NULL, 
    `movie_type_id`  int    NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (movie_id)
        REFERENCES movies (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (movie_type_id)
        REFERENCES movie_types (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);


-- migrate:down

DROP TABLE movies_movie_types;
