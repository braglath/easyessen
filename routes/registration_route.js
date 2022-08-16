const express = require("express");
const router = express.Router();

const fieldValidation = require("../middlewares/fieldValidations/registration_field_validation");
const registrationMiddleware = require("../middlewares/registration_middleware");
const hashedPassword = require("../middlewares/hash_password_middleware");

router.post(
  "/",
  fieldValidation,
  registrationMiddleware.findExistingUserWithEmail,
  hashedPassword,
  registrationMiddleware.saveUserDetails,
  registrationMiddleware.generateAndSaveToken,
  //? generate and save token
  //? save location details
  //? send user details back as json
  (req, res, next) => {
    res.json("hello world working");
  }
);

module.exports = router;
