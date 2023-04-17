
const mysql = require("mysql");

const db = mysql.createConnection({
MYSQLHOST: "localhost",
MYSQLUSER: "root",
MYSQLPASSWORD: "password",
MYSQLDATABASE: "social",
MYSQLPORT:3306
})
module.exports = { db }

// host: "localhost",
// user: "root",
// password: "password",
// database: "social"

