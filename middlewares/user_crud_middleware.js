const userCRUDService = require("../services/user_crud_service");

exports.getUserDetails = (req, res, next) => {
  const { id } = req.params;
  userCRUDService.getUserDetailsFromTable(id, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    req.userDetails = result;
    userCRUDService.getTokensFromTable(id, function (err, result) {
      if (err) return next({ message: err });
      //? else
      req.userTokens = result; //? saving all user tokens table to req
      userCRUDService.getGeoLocationFromTable(id, function (err, result) {
        if (err) return next({ message: err });
        //? else
        req.userGeoLocation = result;
        //? send all details as json
        next();
      });
    });
  });
};
