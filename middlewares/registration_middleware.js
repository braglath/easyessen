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
    password: req.body.password,
    profile_image: req.body.profile_image,
    profile_image: req.body.email,
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
      console.log(result);
      next();
    });
  });
};

exports.generateAndSaveToken = function (req, res, next) {
  generateToken(req.userId, function (err, result) {
    if (err)
      return next({ message: "error generating token but user details saved" });
    //? else
    console.log(result["access_token"]);
    console.log(result["refresh_token"]);
    //? save the token and device token in db
    next();
  });
};
