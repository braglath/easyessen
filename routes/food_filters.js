const express = require("express");
const router = express.Router();

const foodModel = require("../models/food_model");

router.route("/offers").get((req, res) => {
  var foodWithOffers = foodModel.data.filter((e) => e.offers.length !== 0);
  console.log(`foodWithOffers length - ${foodWithOffers.length}`);
  res.json({
    data: foodWithOffers,
  });
});

router.route("/veg").get((req, res) => {
  var foodIsVeg = foodModel.data.filter((e) => e.isVeg === true);
  console.log(`foodWithOffers length - ${foodIsVeg.length}`);
  res.json({
    data: foodIsVeg,
  });
});

module.exports = router;
