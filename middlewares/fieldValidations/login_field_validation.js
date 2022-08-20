const validator = require("../../helpers/validating_login_helper");

module.exports = function (req, res, next) {
  const validationRule = {
    email_or_password: "required|string",
    password: "required|string|min:6|strict",
    device_token: "required|string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};
