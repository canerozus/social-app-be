const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql");

const db = mysql.createConnection({
host: process.env.DBHOST,
user: process.env.DBUSER,
password: process.env.DBPASSWORD,
database: process.env.DBDATABASE
});

module.exports = { db };

// host: "localhost",
// user: "root",
// password: "password",
// database: "social"


