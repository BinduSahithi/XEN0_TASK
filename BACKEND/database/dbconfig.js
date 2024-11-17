
const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'adithya',
  database: 'crm-db',
});

module.exports = db;
