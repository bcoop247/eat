const pgp = require("pg-promise")(/*options*/);

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'eat',
  user: 'brandoncooper',
  password: 'pass'
};


const db = pgp(dbConfig);

module.exports = db;