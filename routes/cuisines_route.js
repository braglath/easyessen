const express = require("express");
const router = express.Router();

const cuisinesModel = require("../models/cuisines_model");

router.get("/", (req, res) => {
  res.json(cuisinesModel);
});

module.exports = router;
