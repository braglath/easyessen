const express = require("express");
const router = express.Router();

const checkIdMatch = require("../middlewares/check_id_match_middleware");
const changePasswordMiddleware = require("../middlewares/change_password_middleware");
const fieldValidation = require("../middlewares/fieldValidations/change_password_field_validation");
const changePasswordController = require("../controllers/change_password_controller");

router.post(
  "/:id",
  checkIdMatch,
  fieldValidation,
  changePasswordMiddleware.checkUserExists,
  changePasswordMiddleware.checkOldPassword,
  changePasswordMiddleware.hashNewPassword,
  changePasswordMiddleware.updateNewlyHashedPassword,
  changePasswordController
);

module.exports = router;
