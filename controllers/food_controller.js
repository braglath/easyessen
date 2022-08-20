module.exports = (req, res, next) => {
  const food = req.foodList;
  res.json({
    message: "success",
    data: food,
    //   [
    //    {
    //      food_id: food["food_id"],
    //      name: food["name"],
    //      description: food["description"],
    //      type: food["type"],
    //      image: food["image"],
    //      price: food["price"],
    //      is_veg: food["is_veg"] == 0 ? false : true,
    //      preparation_time: food["preparation_time"],
    //      cuisine: {
    //        cuisine_id: food["cuisine_id"],
    //        cuisine_name: food["cuisine_name"],
    //      },
    //      menu: {
    //        menu_id: food["menu_id"],
    //        menu_name: food["menu_name"],
    //      },
    //      offer: [
    //        food["offer_id"] == 21
    //          ? null
    //          : {
    //              offer_id: food["offer_id"],
    //              percentage: food["percentage"],
    //              coupon_code: food["coupon_code"],
    //            },
    //      ],
    //    },
    //  ],
  });
};
