const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql");

const db = mysql.createConnection({
    host:process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

module.exports = { db };

// host: "localhost",
// user: "root",
// password: "password",
// database: "social"

