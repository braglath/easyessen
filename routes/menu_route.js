const express = require("express");
const router = express.Router();
const foodModel = require("../models/food_model");

router.get("/", (req, res, next) => {
  var recommended = foodModel.data.filter((e) => e.menu == 1);
  var breakfast = foodModel.data.filter((e) => e.menu == 2);
  var lunch = foodModel.data.filter((e) => e.menu == 3);
  var dinner = foodModel.data.filter((e) => e.menu == 4);

  res.json({
    data: [
      {
        menuId: 1,
        name: "Recommended",
        count: recommended.length,
      },
      {
        menuId: 2,
        name: "Breakfast",
        count: breakfast.length,
      },
      {
        menuId: 3,
        name: "Lunch",
        count: lunch.length,
      },
      {
        menuId: 4,
        name: "Dinner",
        count: dinner.length,
      },
    ],
  });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  var foodDetails = foodModel.data.filter((e) => e.menu == id);
  if (foodDetails.length === 0) return next({ message: "no items" });
  res.json(foodDetails);
});

module.exports = router;
