const mysql = require("../config/mysql_config");

exports.updateFoodTable = function (params, callback) {
  const { name, image, type, description, price, is_veg, preparation_time } =
    params;

  const sqlQuery = `
    INSERT INTO foods
     (name,description,type,image,price,is_veg,preparation_time) VALUES ('${name}', '${description}', '${type}', '${image}', '${price}', '${is_veg}', '${preparation_time}' );
    `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, "passed");
  });
};

exports.getFoodIdFromTable = function (foodName, callback) {
  const sqlQuery = `
   SELECT food_id FROM foods
   WHERE name = '${foodName}'
   `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, result[0]["food_id"]);
  });
};

exports.updateCuisinesTable = function (params, callback) {
  const { food_id, cuisine_id } = params;
  const sqlQuery = `
  INSERT INTO food_cuisine
  (food_id, cuisine_id) VALUES ('${food_id}','${cuisine_id}')
   `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, "passed");
  });
};

exports.updateMenuTable = function (params, callback) {
  const { food_id, menu_id } = params;
  const sqlQuery = `
  INSERT INTO food_menu
  (food_id, menu_id) VALUES ('${food_id}','${menu_id}')
   `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, "passed");
  });
};

exports.updateOfferTable = function (params, callback) {
  const { food_id, offer_id } = params;
  const sqlQuery = `
  INSERT INTO food_offers
  (food_id, offer_id) VALUES ('${food_id}','${offer_id}')
   `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, "passed");
  });
};
