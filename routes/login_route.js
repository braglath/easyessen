const express = require("express");
const router = express.Router();

const fieldValidation = require("../middlewares/fieldValidations/login_field_validation");
const loginMiddleware = require("../middlewares/login_middleware");
const loginController = require("../controllers/login_controller");

router.post(
  "/",
  fieldValidation,
  loginMiddleware.findExistingUser,
  loginMiddleware.checkPassword,
  loginMiddleware.generateAndSaveToken,
  loginMiddleware.getUserDetails,
  loginController
);

module.exports = router;
