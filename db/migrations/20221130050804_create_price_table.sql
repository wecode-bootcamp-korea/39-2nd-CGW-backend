-- migrate:up
CREATE TABLE price
(
    `id`      int             NOT NULL    AUTO_INCREMENT, 
    `age_id`  int             NOT NULL, 
    `price`   decimal(8,2)    NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (age_id)
        REFERENCES age (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);


-- migrate:down

DROP TABLE price;
