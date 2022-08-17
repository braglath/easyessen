const loginService = require("../services/login_service");
const generateToken = require("../middlewares/generate_jwttoken_middleware");
const registrationServices = require("../services/registration_service");

exports.findExistingUser = (req, res, next) => {
  const emailOrPassword = req.body.email_or_password;

  const params = {
    emailOrPassword: emailOrPassword,
  };

  loginService.findExistingUserFromTable(params, function (err, result) {
    if (err) return next({ message: err });
    //? else
    //? user exists
    req.hashedPassword = result["hashedPassword"];
    req.userId = result["userId"];
    next();
  });
};

exports.checkPassword = (req, res, next) => {
  const password = req.body.password;
  const hashedPassword = req.hashedPassword;
  const params = { password: password, hashedPassword: hashedPassword };

  loginService.checkPasswordWithBcrypt(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else password matched
    next();
  });
};

exports.generateAndSaveToken = (req, res, next) => {
  generateToken(req.userId, function (err, result) {
    if (err) return next({ message: err.message });
    //? else token generated successfully
    const params = {
      userId: req.userId,
      access_token: result["access_token"],
      refresh_token: result["refresh_token"],
    };
    loginService.saveTokenToTable(params, function (err, result) {
      if (err) return next({ message: err.message });
      //? else token table updated
      next();
    });
  });
};

exports.getUserDetails = (req, res, next) => {
  const params = {
    userId: req.userId,
    email_or_password: req.body.email_or_password,
  };

  loginService.getUserDetailsFromTable(params, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    req.userDetails = result;
    // console.log(`login middleware - ${req.userDetails}`);
    const params = { userId: req.userId };

    registrationServices.getTokensFromTable(params, function (err, result) {
      if (err) return next({ message: err });
      //? else
      req.userTokens = result; //? saving all user tokens table to req
      const params = { userId: req.userId };
      registrationServices.getGeoLocationFromTable(
        params,
        function (err, result) {
          if (err) return next({ message: err });
          //? else
          req.userGeoLocation = result;
          //? send all details as json
          next();
        }
      );
    });
  });
};
