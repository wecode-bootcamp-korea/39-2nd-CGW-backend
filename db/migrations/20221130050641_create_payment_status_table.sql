-- migrate:up
CREATE TABLE payment_status
(
    `id`    int             NOT NULL    AUTO_INCREMENT, 
    `name`  varchar(45)     NOT NULL, 
    PRIMARY KEY (id)
);


-- migrate:down

DROP TABLE payment_status;
