require("dotenv").config();
const app = require("./app");

const mysql = require("./config/mysql_config");

const port = process.env.PORT || process.env.port;

mysql.connect(function (err) {
  if (err) {
    console.log(`sql database connection error ~ ${err}`);
    return;
    // throw err;
  }
  // server will only start if db is connected
  app.listen(port, () => {
    console.log("database connected");
    console.log(
      `- Sever listening on http://localhost:${port} or http://13.126.10.179:${port}`
    );
  });
});
