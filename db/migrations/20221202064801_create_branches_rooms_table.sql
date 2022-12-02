-- migrate:up
CREATE TABLE branches_rooms
(
    `id`         int    NOT NULL    AUTO_INCREMENT, 
    `branch_id`  int    NOT NULL, 
    `room_id`    int    NOT NULL, 
     PRIMARY KEY (id),
     CONSTRAINT  FOREIGN KEY (branch_id)
        REFERENCES branches (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (room_id)
        REFERENCES rooms (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down
DROP TABLE branches_rooms

