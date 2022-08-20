const mysql = require("../config/mysql_config");
const bcrypt = require("bcrypt");

exports.findExistingUser = (userId, callback) => {
  const sqlQuery = `
   SELECT * FROM user
   WHERE user_id = '${userId}'
   `;
  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    if (result.length == 0)
      return callback({ message: "user does not exists" });
    //? else user exists
    callback(null, result[0]);
  });
};

exports.getPasswordFromTable = function (userId, callback) {
  const sqlQuery = `
   SELECT password FROM user
   WHERE user_id = '${userId}'
   `;
  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    if (result.length == 0)
      return callback({ message: "old password is wrong" });
    //? else
    return callback(null, result[0]["password"]);
  });
};

exports.compareTablePasswordWOldPassword = function (params, callback) {
  const hashedPasswordFromTable = params["hashed_password_from_table"];
  const passwordFromBody = params["password_from_body"];

  bcrypt.compare(
    passwordFromBody,
    hashedPasswordFromTable,
    function (err, res) {
      if (err) return callback({ message: err.message });
      if (res) return callback(null, "passed"); //? password matched
      // response is OutgoingMessage object that server response http request
      return callback({ message: "old password does not match" });
    }
  );
};

exports.hashNewPassword = async function (newPassword, callback) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  callback(null, hashedPassword);
};

exports.updateNewHashedPassToTable = function (params, callback) {
  const newHashedPass = params["newHashedPass"];
  const userId = params["userId"];

  const sqlQuery = `
   UPDATE user
   SET password = '${newHashedPass}'
   WHERE user_id = '${userId}'
   `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, "passed");
  });
};
