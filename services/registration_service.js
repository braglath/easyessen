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

exports.addTokensToTable = function (params, callback) {
  const userId = params["userId"];
  const device_token = params["device_token"];
  const access_token = params["access_token"];
  const refresh_token = params["refresh_token"];

  const sqlQuery = `
  INSERT INTO tokens (user_id,device_token,access_token,refresh_token) 
  VALUES ('${userId}','${device_token}','${access_token}','${refresh_token}')
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    callback(null, "passed");
  });
};

exports.saveGeoLocationToTable = function (params, callback) {
  const userId = params["userId"];
  const latitude = params["latitude"];
  const longitude = params["longitude"];

  const sqlQuery = `
  INSERT INTO geo_location (user_id,latitude,longitude) 
  VALUES ('${userId}','${latitude}','${longitude}')
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, "passed");
  });
};

exports.getUserDetailsFromTable = function (params, callback) {
  const userId = params["userId"];
  const email = params["email"];
  const phonenumber = params["phonenumber"];

  const sqlQuery = `
  SELECT * FROM user
  WHERE user_id  = '${userId}' AND email = '${email}' AND phonenumber = '${phonenumber}'
  `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message }, null);
    //? else
    // console.log(`fullname : ${result[0]["full_name"]}`);
    callback(null, result[0]);
  });
};

exports.getTokensFromTable = function (params, callback) {
  const userId = params["userId"];

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
  const userId = params["userId"];

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
