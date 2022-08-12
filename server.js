const express = require("express");
const app = express();

const foodRoute = require("./routes/food_route");
const foodFiltersRoute = require("./routes/food_filters");
const errorHandler = require("./middlewares/error_handler");

app.use(express.json());

app.use("/", foodRoute);
app.use("/food", foodFiltersRoute);
app.use(errorHandler);

app.listen(5000, () => {
  console.log(
    "- Sever listening on http://localhost:5000 or http://13.126.10.179:5000"
  );
});
