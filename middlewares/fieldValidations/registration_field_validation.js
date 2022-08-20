const validator = require("../../helpers/validating_registration_helper");

module.exports = function (req, res, next) {
  const validationRule = {
    fullname: "required|string|min:4",
    email: "required|email",
    phonenumber: "required|string|international",
    password: "required|string|min:6|strict",
    profile_image: "required|string|url",
    latitude: "required|numeric",
    longitude: "required|numeric",
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
