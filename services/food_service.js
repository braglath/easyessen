const mysql = require("../config/mysql_config");

exports.getAllFoodsFromTable = function (callback) {
  const sqlQuery = `
   SELECT f.food_id, f.name, f.description, f.type, f.image, f.price, f.is_veg, f.preparation_time, c.cuisine_id, cu.cuisine_name, m.menu_id, mu.name as menu_name , off.offer_id, off.percentage, off.coupon_code
   FROM foods f

   JOIN food_cuisine c
   	ON f.food_id = c.food_id
   	JOIN cuisines cu
   		ON c.cuisine_id = cu.cuisine_id

   JOIN food_menu m
   	ON f.food_id = m.food_id
       JOIN menu mu
   		ON m.menu_id = mu.menu_id

   JOIN food_offers o
   	ON  o.food_id = f.food_id

   JOIN offers off
   	ON off.offer_id = o.offer_id
      `;

  mysql.query(sqlQuery, function (err, result) {
    if (err) return callback({ message: err.message });
    //? else
    callback(null, result);
  });
};
