-- migrate:up
CREATE TABLE users
(
    `id`              int             NOT NULL    AUTO_INCREMENT, 
    `name`            varchar(45)     NOT NULL, 
    `email`           varchar(100)    NOT NULL, 
    `password`        varchar(200)    NOT NULL, 
    `birth`           varchar(45)     NOT NULL, 
    `social_id`       int             NULL, 
    `social_type_id`  int             NULL, 
    PRIMARY KEY (id)
    CONSTRAINT  FOREIGN KEY (social_type_id)
        REFERENCES social_types (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
);


-- migrate:down

DROP TABLE users;
