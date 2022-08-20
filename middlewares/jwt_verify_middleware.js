const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return next({ message: "Unauthorized User" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next({ message: "Token Expired" });
    req.userId = user["user_id"];
   //  console.log("from jwt header " + user["user_id"]);
    next();
  });
};
