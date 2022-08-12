const express = require("express");
const router = express.Router();

const foodModel = require("../models/food_model");

router.route("/food").get((req, res) => {
  res.json(foodModel);
});

module.exports = router;
