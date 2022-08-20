const mysql = require("mysql");

const con = mysql.createConnection({
  host: "water.cqkcimqheiyo.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "easyessen",
});

module.exports = con;
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("sql database connected!");
// });

// module.exports = con;
