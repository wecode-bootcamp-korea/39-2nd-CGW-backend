-- migrate:up
ALTER TABLE orders
  ADD COLUMN created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

-- migrate:down
DROP TABLE orders
