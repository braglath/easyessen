const express = require("express");
const router = express.Router();

const addFoodMiddleware = require("../middlewares/add_food_middleware");

router.post(
  "/",
  addFoodMiddleware.addFood,
  addFoodMiddleware.getFoodId,
  addFoodMiddleware.updateCuisines,
  addFoodMiddleware.updateMenu,
  addFoodMiddleware.updateOffer,
  (req, res, next) => {
    res.json({ message: "food added" });
  }
);

module.exports = router;
