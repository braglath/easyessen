const services = require("../services/food_service");

exports.getAllFoods = (req, res, next) => {
  services.getAllFoodsFromTable(function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    req.foodList = result;
    next();
  });
};
