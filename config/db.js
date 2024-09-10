const mysql = require("mysql");
require("dotenv").config();
// Create a connection to the database

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database

db.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

module.exports = db;
