let pgp = require('pg-promise')({});
let connectionString = process.env.DATABASE_URL;
let db = pgp(connectionString)
module.exports = db;