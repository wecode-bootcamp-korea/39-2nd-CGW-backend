-- migrate:up
CREATE TABLE payment
(
    `id`                 int             NOT NULL    AUTO_INCREMENT, 
    `total_price`        decimal(8,2)    NOT NULL, 
    `payment_status_id`  int             NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (payment_status_id)
        REFERENCES payment_status (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);


-- migrate:down

DROP TABLE payment;
