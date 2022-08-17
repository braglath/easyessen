const registrationServices = require("../services/registration_service");
const generateToken = require("../middlewares/generate_jwttoken_middleware");

exports.findExistingUserWithEmail = function (req, res, next) {
  const params = {
    fieldName: "email",
    fieldValue: req.body.email,
  };
  registrationServices.findExistingUser(params, function (err, result) {
    if (err) return next({ message: err });
    //? else no users found with email, check with phonenumber

    const params = {
      fieldName: "phonenumber",
      fieldValue: req.body.phonenumber,
    };
    registrationServices.findExistingUser(params, function (err, result) {
      if (err) return next({ message: err });
      //? else no users found so good to register
      next();
    });
  });
};

exports.saveUserDetails = function (req, res, next) {
  const params = {
    full_name: req.body.fullname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.hashedPassword,
    profile_image: req.body.profile_image,
    created_on: new Date().toISOString().slice(0, -1),
  };

  registrationServices.addDetailsToUserTable(params, function (err, result) {
    if (err) return next({ message: err });
    //? else
    //? get user id from db and add it to req.userId
    registrationServices.getUserId(params, function (err, result) {
      if (err) return next({ message: err });
      //? else
      req.userId = result;
      // console.log(result);
      next();
    });
  });
};

exports.generateAndSaveToken = function (req, res, next) {
  generateToken(req.userId, function (err, result) {
    if (err)
      return next({ message: "error generating token but user details saved" });
    //? else
    //? save the token and device token in db
    const params = {
      userId: req.userId,
      device_token: req.body.device_token,
      access_token: result["access_token"],
      refresh_token: result["refresh_token"],
    };
    registrationServices.addTokensToTable(params, function (err, result) {
      if (err) return next({ message: err });
      //? else
      next();
    });
  });
};

exports.saveUserLocation = function (req, res, next) {
  const params = {
    userId: req.userId,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };

  registrationServices.saveGeoLocationToTable(params, function (err, result) {
    if (err) return next({ message: err });
    //? else
    next();
  });
};

exports.getUserDetails = function (req, res, next) {
  const params = {
    userId: req.userId,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
  };

  registrationServices.getUserDetailsFromTable(params, function (err, result) {
    if (err) return next({ message: err });
    //? else
    req.userDetails = result; //? saving the user details table to req
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
