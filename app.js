/// packages imports
///
const express = require("express");
const app = express();

/// file imports
///
const registrationRoute = require("./routes/registration_route");
const foodRoute = require("./routes/food_route");
const menuRoute = require("./routes/menu_route");
const foodFiltersRoute = require("./routes/food_filters_route");
const cuisinesRoute = require("./routes/cuisines_route");
const errorHandler = require("./middlewares/error_handler");

/// server essentials
///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/// routes
///
app.use("/user/registration", registrationRoute);
app.use("/food", foodFiltersRoute);
app.use("/food/menu", menuRoute);
app.use("/", foodRoute);
app.use("/cuisines", cuisinesRoute);
app.use(errorHandler);

module.exports = app;
