const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "record",
  password: "1276#Avtc",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool to be used in other modules
module.exports = pool.promise();
