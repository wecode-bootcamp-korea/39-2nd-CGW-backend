-- migrate:up
CREATE TABLE movies
(
    `id`          int              NOT NULL    AUTO_INCREMENT, 
    `title`       varchar(45)      NOT NULL, 
    `thumbnail`   varchar(2083)    NULL, 
    `ticketRate`  decimal(3,2)     NOT NULL, 
    `rate`        decimal(2,1)     NOT NULL, 
    `ageLimit`    int              NOT NULL, 
    `created_at`  timestamp        NOT NULL         DEFAULT CURRENT_TIMESTAMP, 
     PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE movies

