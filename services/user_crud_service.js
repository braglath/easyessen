const mysql = require("../config/mysql_config");

exports.getUserDetailsFromTable = function (params, callback) {
  const userId = params;

  const sqlQuery = `
  SELECT * FROM user
  WHERE user_id  = '${userId}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    if (result.length === 0)
      return callback({ message: "no user exists with this id" });
    callback(null, result[0]);
  });
};

exports.getTokensFromTable = function (params, callback) {
  const userId = params;

  const sqlQuery = `
  SELECT * FROM tokens
  WHERE user_id = '${userId}'
  `;
  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, result[0]);
  });
};

exports.getGeoLocationFromTable = function (params, callback) {
  const userId = params;

  const sqlQuery = `
  SELECT * FROM geo_location
  WHERE user_id = '${userId}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, result[0]);
  });
};
