const express = require("express");
const router = express.Router();
const foodModel = require("../models/food_model");
const cuisinesModel = require("../models/cuisines_model");

router.get("/", (req, res) => {
  res.json(cuisinesModel);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(` cuisine id - ${id}`);
  var foodWithCuisine = foodModel.data.filter((e) => e.cuisineId == id);
  res.json(foodWithCuisine);
});

module.exports = router;
