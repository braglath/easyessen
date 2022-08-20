const changePasswordService = require("../services/change_password_service");

exports.checkUserExists = (req, res, next) => {
  changePasswordService.findExistingUser(req.userId, function (err, result) {
    if (err) return next({ message: err.message });
    //? else
    req.userDetails = result;
    next();
  });
};

exports.checkOldPassword = (req, res, next) => {
  changePasswordService.getPasswordFromTable(
    req.userId,
    function (err, result) {
      if (err) return next({ message: err.message });
      //? else
      req.hashedPasswordFromTable = result;
      const params = {
        hashed_password_from_table: req.hashedPasswordFromTable,
        password_from_body: req.body.old_password,
      };
      changePasswordService.compareTablePasswordWOldPassword(
        params,
        function (err, result) {
          if (err) return next({ message: err.message });
          //? else
          next();
        }
      );
    }
  );
};

exports.hashNewPassword = function (req, res, next) {
  changePasswordService.hashNewPassword(
    req.body.new_password,
    function (err, result) {
      if (err) return next({ message: err.message });
      //? else
      req.hashNewPassword = result;
      next();
    }
  );
};

exports.updateNewlyHashedPassword = (req, res, next) => {
  const params = {
    newHashedPass: req.hashNewPassword,
    userId: req.userId,
  };
  changePasswordService.updateNewHashedPassToTable(
    params,
    function (err, result) {
      if (err) return next({ message: err.message });
      //? else
      next();
    }
  );
};
