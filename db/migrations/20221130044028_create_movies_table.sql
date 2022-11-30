-- migrate:up
CREATE TABLE movies
(
  `id`             int              NOT NULL    AUTO_INCREMENT, 
  `movie_title`    varchar(50)      NOT NULL, 
  `thumbnail`      varchar(2083)    NULL, 
  `created_at`     timestamp        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `age_limit_id`   int              NOT NULL, 
  `image_id`       int              NULL,
  PRIMARY KEY (id),
  CONSTRAINT  FOREIGN KEY (age_limit_id)
    REFERENCES age_limit (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT  FOREIGN KEY (image_id)
    REFERENCES images (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);
-- migrate:down
DROP TABLE movies;
