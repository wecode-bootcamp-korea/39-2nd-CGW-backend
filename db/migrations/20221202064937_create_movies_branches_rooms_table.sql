-- migrate:up
CREATE TABLE movies_branches_rooms
(
    `id`                int    NOT NULL    AUTO_INCREMENT, 
    `branches_room_id`  int    NOT NULL, 
    `movie_id`          int    NOT NULL, 
     PRIMARY KEY (id),
     CONSTRAINT  FOREIGN KEY (branches_room_id)
        REFERENCES branches_rooms (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (movie_id)
        REFERENCES movies (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down

DROP TABLE movies_branches_rooms
