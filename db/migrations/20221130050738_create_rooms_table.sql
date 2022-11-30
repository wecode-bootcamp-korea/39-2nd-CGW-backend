-- migrate:up
CREATE TABLE rooms
(
    `id`           int            NOT NULL    AUTO_INCREMENT, 
    `name`         varchar(20)    NOT NULL, 
    `capacity_id`  int            NOT NULL, 
    PRIMARY KEY (id)
    CONSTRAINT  FOREIGN KEY (capacity_id)
        REFERENCES capacity (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
);

-- migrate:down

DROP TABLE rooms;
