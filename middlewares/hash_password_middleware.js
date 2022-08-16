const bcrypt = require("bcrypt");

module.exports = async function (req, res, next) {
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  req.hashedPassword = hashedPassword;
  next();
};

