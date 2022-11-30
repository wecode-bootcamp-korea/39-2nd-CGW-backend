-- migrate:up
CREATE TABLE orders
(
    `id`              int    NOT NULL    AUTO_INCREMENT, 
    `tid`             varchar(45)    NOT NULL, 
    `totalPrice`      decimal(8,2)    NOT NULL, 
    `user_id`         int    NOT NULL, 
    `orderStatus_id`  int    NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (orderStatus_id)
        REFERENCES orderStatus (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down
DROP TABLE orders
