-- migrate:up
CREATE TABLE movie_types
(
    `id`    int            NOT NULL    AUTO_INCREMENT, 
    `name`  varchar(45)    NOT NULL, 
    PRIMARY KEY (id)
);


-- migrate:down

DROP TABLE movie_types;
