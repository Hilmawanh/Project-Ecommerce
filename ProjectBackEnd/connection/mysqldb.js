const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "empi-0211",
  database: "db_sepeda",
  port: "3306",
  multipleStatements: true // Untuk Lopping sql query
});

module.exports = db;
