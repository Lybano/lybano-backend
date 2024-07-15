require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs");

const pool = mysql.createPool({
  host: process.env.MYSQL_URI,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQLPASS,
  database: process.env.MYSQLBD,
  port: 28162, // Porta personalizada
  connectTimeout: 20000, // 20 segundos
  ssl: {
    ca: fs.readFileSync("certs/ca.pem"),
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
