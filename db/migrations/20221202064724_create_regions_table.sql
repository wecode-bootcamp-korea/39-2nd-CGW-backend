-- migrate:up
CREATE TABLE regions
(
    `id`    int            NOT NULL    AUTO_INCREMENT, 
    `name`  varchar(50)    NOT NULL, 
     PRIMARY KEY (id)
);

-- migrate:down

