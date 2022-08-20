const e = require("express");
const addFoodService = require("../services/add_food_service");

exports.addFood = (req, res, next) => {
  const { name, image, type, description, price, is_veg, preparation_time } =
    req.body;

  const params = {
    name: name,
    image: image,
    type: type,
    description: description,
    price: price,
    is_veg: is_veg,
    preparation_time: preparation_time,
  };

  addFoodService.updateFoodTable(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    next();
  });
};

exports.getFoodId = (req, res, next) => {
  const { name } = req.body;
  addFoodService.getFoodIdFromTable(name, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    req.food_id = result;
    next();
  });
};

exports.updateCuisines = (req, res, next) => {
  const { cuisine_id } = req.body;

  const params = {
    food_id: req.food_id,
    cuisine_id: cuisine_id,
  };
  addFoodService.updateCuisinesTable(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    next();
  });
};

exports.updateMenu = (req, res, next) => {
  const { menu_id } = req.body;

  const params = {
    food_id: req.food_id,
    menu_id: menu_id,
  };
  addFoodService.updateMenuTable(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    next();
  });
};

exports.updateOffer = (req, res, next) => {
  let { offer_id } = req.body;

  if (offer_id == null) {
    offer_id = 21;
  }

  const params = {
    food_id: req.food_id,
    offer_id: offer_id,
  };
  addFoodService.updateOfferTable(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    next();
  });
};
