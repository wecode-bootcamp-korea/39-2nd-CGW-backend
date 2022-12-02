-- migrate:up
CREATE TABLE movieOptions
(
    `id`                       int    NOT NULL    AUTO_INCREMENT, 
    `movies_branches_room_id`  int    NOT NULL, 
    `dates_time_id`            int    NOT NULL, 
     PRIMARY KEY (id),
     CONSTRAINT  FOREIGN KEY (movies_branches_room_id)
        REFERENCES movies_branches_rooms (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (dates_time_id)
        REFERENCES dates_times (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down
DROP TABLE movieOptions

