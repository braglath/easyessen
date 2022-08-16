const express = require("express");
const router = express.Router();

const fieldValidation = require("../middlewares/fieldValidations/registration_field_validation");

router.post("/", fieldValidation, (req, res, next) => {
  res.json("hello world working");
});

module.exports = router;
