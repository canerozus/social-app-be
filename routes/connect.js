
const mysql = require("mysql");

const db = mysql.createConnection({
MYSQLHOST: "localhost",
MYSQLUSER: "root",
MYSQLPASSWORD: "password",
MYSQLDATABASE: "social"
})
module.exports = { db }

// host: "localhost",
// user: "root",
// password: "password",
// database: "social"

