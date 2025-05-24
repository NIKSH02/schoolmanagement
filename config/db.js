require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true }
});

module.exports = pool.promise();
