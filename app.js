/// packages imports
///
const express = require("express");
const app = express();

/// file imports
///
const registrationRoute = require("./routes/registration_route");
const loginRoute = require("./routes/login_route");
const foodRoute = require("./routes/food_route");
const menuRoute = require("./routes/menu_route");
const foodFiltersRoute = require("./routes/food_filters_route");
const cuisinesRoute = require("./routes/cuisines_route");
const cartRoute = require("./routes/cart_route");
const stripePaymentRoute = require("./routes/stripe_payment_route");
const changePasswordRoute = require("./routes/change_password_route");
const errorHandler = require("./middlewares/error_handler");
const checkTokenExists = require("./middlewares/jwt_verify_middleware");
const userCRUD = require("./routes/user_crud_route");

/// server essentials
///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
///
/// routes
///routes that do not need token
app.use("/user/registration", registrationRoute);
app.use("/user/login", loginRoute);
app.use("/food", foodFiltersRoute);
app.use("/food/menu", menuRoute);
app.use("/", foodRoute);
app.use("/stripe-payment", stripePaymentRoute);
/// check if token exists and token expired or not
app.use(checkTokenExists);
/// routes that need token
app.use("/user", userCRUD);
app.use("/user/change-password", changePasswordRoute);
app.use("/cuisines", cuisinesRoute);
app.use("/cart", cartRoute);
app.use(errorHandler);

module.exports = app;
