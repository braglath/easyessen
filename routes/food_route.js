const express = require("express");
const router = express.Router();

const foodModel = require("../models/food_model");

router.route("/food").get((req, res) => {
  res.json(foodModel);
});

router.route("/food/:id").get((req, res, next) => {
  const { id } = req.params;
  var foodDetails = foodModel.data.filter((e) => e.id == id);
  if (foodDetails.length === 0) return next({ message: "item not found" });
  res.json(foodDetails);
});

module.exports = router;
