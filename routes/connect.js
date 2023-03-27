
const mysql = require("mysql");

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "social"
})
module.exports = { db }

// host: "localhost",
// user: "root",
// password: "password",
// database: "social"

// host: "eu-cdbr-west-03.cleardb.net",
// user: "be16deaa660c73",
// password: "d587c9c3",
// database: "heroku_dc7f476f00a0393"