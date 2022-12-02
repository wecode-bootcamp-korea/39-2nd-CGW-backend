-- migrate:up
CREATE TABLE users
(
    `id`              int            NOT NULL    AUTO_INCREMENT, 
    `name`            varchar(20)    NULL, 
    `nickname`        varchar(20)    NULL, 
    `email`           varchar(50)    NULL, 
    `birth`           varchar(20)    NULL, 
    `phone`           varchar(20)    NULL, 
    `social_id`       bigint         NULL, 
    `social_type_id`  int            NULL, 
     PRIMARY KEY (id),
     UNIQUE KEY `unique_users` (`email`),
     CONSTRAINT  FOREIGN KEY (social_type_id)
        REFERENCES social_types (id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- migrate:down

DROP TABLE users
