-- migrate:up
SET foreign_key_checks = 0;
DROP TABLE branches_rooms;
SET foreign_key_checks = 1;

-- migrate:down

