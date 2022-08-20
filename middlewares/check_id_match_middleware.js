checkIdMatch = function (req, res, next) {
  const { id } = req.params;
  if (req.userId == id) return next();
  //? else
  next({ message: "Id and Token does not match" });
};

module.exports = checkIdMatch;
