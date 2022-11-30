-- migrate:up
CREATE TABLE branches
(
    `id`         int            NOT NULL    AUTO_INCREMENT, 
    `name`       varchar(45)    NOT NULL, 
    `region_id`  int            NOT NULL, 
    `room_id`    int            NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT  FOREIGN KEY (room_id)
        REFERENCES rooms (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT  FOREIGN KEY (region_id)
        REFERENCES regions (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);


-- migrate:down

DROP TABLE branches;
