const express = require("express");
const router = express.Router();

const fieldValidation = require("../middlewares/fieldValidations/registration_field_validation");
const registrationMiddleware = require("../middlewares/registration_middleware");
const hashedPassword = require("../middlewares/hash_password_middleware");
const registrationController = require("../controllers/registration_controller");

router.post(
  "/",
  fieldValidation,
  registrationMiddleware.findExistingUserWithEmail,
  hashedPassword,
  registrationMiddleware.saveUserDetails,
  registrationMiddleware.generateAndSaveToken,
  registrationMiddleware.saveUserLocation,
  registrationMiddleware.getUserDetails,
  registrationController
);

module.exports = router;
