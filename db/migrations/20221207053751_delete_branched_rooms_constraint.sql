-- migrate:up
SET foreign_key_checks = 0;

--  movies_branches_rooms에서 branche_room_id 컬럼 지우기
ALTER TABLE movies_branches_rooms DROP FOREIGN KEY movies_branches_rooms_ibfk_1;
ALTER TABLE movies_branches_rooms DROP branches_room_id;

--  movies_branches_rooms에서 branche_id 추가하고 외래키 제약 조건 걸기
ALTER TABLE movies_branches_rooms ADD branch_id INT NOT NULL;
ALTER TABLE movies_branches_rooms ADD CONSTRAINT mbr_branch_id_fk FOREIGN KEY (branch_id) REFERENCES branches (id);

SET foreign_key_checks = 1;

