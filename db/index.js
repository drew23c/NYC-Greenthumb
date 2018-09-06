let pgp = require('pg-promise')({});
let connectionString = 'postgres://localhost/locations';
let db = pgp(connectionString)
module.exports = db;