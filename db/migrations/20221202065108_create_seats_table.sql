-- migrate:up
CREATE TABLE seats
(
    `id`    int            NOT NULL    AUTO_INCREMENT, 
    `name`  varchar(20)    NOT NULL, 
     PRIMARY KEY (id)
);

-- migrate:down

DROP TABLE seats
