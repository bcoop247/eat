CREATE TABLE IF NOT EXISTS recipes (
id SERIAL PRIMARY KEY,
recipe_name VARCHAR(25) NOT NULL,
ingredients VARCHAR(255) NOT NULL,
directions TEXT NOT NULL
);