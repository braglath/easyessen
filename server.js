const express = require("express");
const app = express();

const foodRoute = require("./routes/food_route");

app.use(express.json());

app.use("/", foodRoute);

app.listen(5000, () => {
  console.log("- Sever listening on http://localhost:5000");
});
