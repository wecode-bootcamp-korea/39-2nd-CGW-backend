-- migrate:up
CREATE TABLE images
(
    `id`   int              NOT NULL    AUTO_INCREMENT, 
    `url`  varchar(2083)    NULL, 
    PRIMARY KEY (id)
);

-- migrate:down

DROP TABLE images;
