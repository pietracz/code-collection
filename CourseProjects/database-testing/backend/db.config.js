var mysql = require("mysql2");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "julian",
  password: "51775399",
  database: "local",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;
