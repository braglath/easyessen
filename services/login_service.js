const bcrypt = require("bcrypt");
const mysql = require("../config/mysql_config");

exports.findExistingUserFromTable = function (params, callback) {
  const emailOrPassword = params["emailOrPassword"];

  const sqlQuery = `
  SELECT * FROM user
  WHERE email = '${emailOrPassword}' OR phonenumber = '${emailOrPassword}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    if (result.length == 0)
      return callback({
        message: "user does not exists with this credentials",
      });
    //? else
    //? get hashed password and send in result
    return callback(null, {
      hashedPassword: result[0]["password"],
      userId: result[0]["user_id"],
    });
  });
};

exports.checkPasswordWithBcrypt = function (params, callback) {
  const password = params["password"];
  const hashedPassword = params["hashedPassword"];

  //   console.log(`hashed password - ${hashedPassword}`);
  //   console.log(`password - ${password}`);

  bcrypt.compare(password, hashedPassword, function (err, res) {
    if (err) return callback({ message: err.message });
    if (res) return callback(null, "passed"); //? password matched
    // response is OutgoingMessage object that server response http request
    return callback({ message: "wrong password" });
  });
};

exports.saveTokenToTable = function (params, callback) {
  const userId = params["userId"];
  const access_token = params["access_token"];
  const refresh_token = params["refresh_token"];

  const sqlQuery = `
  UPDATE tokens
  SET access_token = '${access_token}', refresh_token = '${refresh_token}'
  WHERE user_id = '${userId}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else updated successfully
    return callback(null, "passed");
  });
};

exports.getUserDetailsFromTable = function (params, callback) {
  const userId = params["userId"];
  const email_or_password = params["email_or_password"];

  const sqlQuery = `
  SELECT * FROM user
  WHERE user_id  = '${userId}' AND email = '${email_or_password}' OR phonenumber = '${email_or_password}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    callback(null, result[0]);
  });
};
