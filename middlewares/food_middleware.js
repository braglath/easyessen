const services = require("../services/food_service");
const pagination = require("../services/pagination_service");

exports.getAllFoods = (req, res, next) => {
  services.getAllFoodsFromTable(function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    req.foodList = result;
    next();
  });
};

exports.changeFoodModel = (req, res, next) => {
  const food = req.foodList;

  let newFoodList = [];

  for (let i = 0; i < food.length; i++) {
    newFoodList.push({
      food_id: food[i]["food_id"],
      name: food[i]["name"],
      description: food[i]["description"],
      type: food[i]["type"],
      image: food[i]["image"],
      price: food[i]["price"],
      is_veg: food[i]["is_veg"] == 0 ? false : true,
      preparation_time: food[i]["preparation_time"],
      cuisine: {
        cuisine_id: food[i]["cuisine_id"],
        cuisine_name: food[i]["cuisine_name"],
      },
      menu: {
        menu_id: food[i]["menu_id"],
        menu_name: food[i]["menu_name"],
      },
      offer: [
        food[i]["offer_id"] == 21
          ? null
          : {
              offer_id: food[i]["offer_id"],
              percentage: food[i]["percentage"],
              coupon_code: food[i]["coupon_code"],
            },
      ],
    });
  }

  const params = {
    list: newFoodList,
    page: req.query.page,
    limit: req.query.limit,
  };
  pagination.paginateList(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    res.data = result;
    next();
  });
};
