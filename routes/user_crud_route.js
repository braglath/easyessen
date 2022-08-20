const express = require("express");
const router = express.Router();

const userCRUDmiddleware = require("../middlewares/user_crud_middleware");
const userCRUDcontroller = require("../controllers/user_crud_controller");

router.route("/:id").get(userCRUDmiddleware.getUserDetails, userCRUDcontroller);

module.exports = router;
