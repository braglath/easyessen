const mysql = require("../config/mysql_config");

exports.findExistingUser = function (params, callback) {
  const fieldName = params["fieldName"];
  const fieldValue = params["fieldValue"];

  var sqlQuery;
  if (fieldName === "email") {
    sqlQuery = `
     SELECT * FROM user
     WHERE email = '${fieldValue}'
     `;
  } else {
    sqlQuery = `
     SELECT * FROM user
     WHERE phonenumber = '${fieldValue}'
     `;
  }

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    if (result.length > 0)
      //? user exists
      return callback({ message: `User exists with this ${fieldName}` }, null);
    //? user does not exists
    return callback(null, "passed");
  });
};

exports.addDetailsToUserTable = function (params, callback) {
  const full_name = params["full_name"];
  const email = params["email"];
  const phonenumber = params["phonenumber"];
  const password = params["password"];
  const profile_image = params["profile_image"];
  const created_on = params["created_on"];

  var sqlQuery = `
  INSERT INTO user (full_name, email, phonenumber, password, profile_image, created_on)
  VALUES ( '${full_name}', '${email}', '${phonenumber}', '${password}' , '${profile_image}', '${created_on}')`;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    return callback(null, "passed");
  });
};

exports.getUserId = function (params, callback) {
  const email = params["email"];
  const phonenumber = params["phonenumber"];

  var sqlQuery = `
  SELECT * FROM user
  WHERE email = '${email}' AND phonenumber = '${phonenumber}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    var userID = result[0]["user_id"];
    callback(null, userID);
  });
};
