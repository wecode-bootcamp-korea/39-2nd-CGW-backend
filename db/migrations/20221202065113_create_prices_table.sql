-- migrate:up
CREATE TABLE prices
(
    `id`      int             NOT NULL    AUTO_INCREMENT, 
    `amount`  decimal(7,2)    NOT NULL, 
    `age`     varchar(10)     NOT NULL, 
     PRIMARY KEY (id)
);

-- migrate:down

DROP TABLE prices
