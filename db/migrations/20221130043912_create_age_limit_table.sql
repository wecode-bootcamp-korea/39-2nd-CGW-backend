-- migrate:up
CREATE TABLE age_limit
(
  `id`   int    NOT NULL    AUTO_INCREMENT, 
  `age`  int    NOT NULL, 
  PRIMARY KEY (id)
);


-- migrate:down
DROP TABLE age_limit;

