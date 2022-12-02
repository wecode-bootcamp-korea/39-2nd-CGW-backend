-- migrate:up
CREATE TABLE dates_times
(
    `id`       int    NOT NULL    AUTO_INCREMENT, 
    `date_id`  int    NOT NULL, 
    `time_id`  int    NOT NULL, 
     PRIMARY KEY (id),
     CONSTRAINT  FOREIGN KEY (date_id)
        REFERENCES dates (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
     CONSTRAINT  FOREIGN KEY (time_id)
        REFERENCES times (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down

DROP TABLE dates_times
