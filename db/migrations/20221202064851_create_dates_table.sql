-- migrate:up
CREATE TABLE dates
(
    `id`    int            NOT NULL    AUTO_INCREMENT, 
    `name`  varchar(20)    NOT NULL, 
     PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE dates

