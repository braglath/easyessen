const express = require("express");
const router = express.Router();

router.get(
  //! TODO: get cart details
  "/",
  (req, res, next) => {
    res.json({
      message: `getting cart details`,
    });
  }
);

router
  .route("/:food_id")
  .get(
    //! TODO: add to cart
    //? validate token
    //? check if food already exists in cart
    //? if exists, increase quantity +1 and also increase amount by + price from food table
    //? if this particular food does not exists in cart
    //? update cart table - user id , food id , quantity=1, amount from food table
    //? response - added to cart successfully
    (req, res, next) => {
      const { food_id } = req.params;
      res.json({
        message: `adding food with id - ${food_id}`,
      });
    }
  )
  .post(
    //! TODO: update cart
    (req, res, next) => {
      const { food_id } = req.params;
      res.json({
        message: `updating cart food with id - ${food_id}`,
      });
    }
  )
  .delete(
    //! TODO: delete cart item
    (req, res, next) => {
      const { food_id } = req.params;
      res.json({
        message: `deleting food with id - ${food_id}`,
      });
    }
  );

module.exports = router;
