const mysql = require("mysql");

const db = mysql.createConnection({
    username: "be16deaa660c73",
    password: "d587c9c3",
    database:"heroku_dc7f476f00a0393",
    host:"eu-cdbr-west-03.cleardb.net",
    dialect:"mysql"
})
module.exports = { db }