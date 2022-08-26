const express = require("express");
const router = express.Router();

const stripePaymentMiddleware = require("../middlewares/stripe_payment_middleware");
const stripePaymentController = require("../controllers/stripe_payment_controller");

router.post(
  "/create-order",
  stripePaymentMiddleware.createOrder,
  stripePaymentController
);

router.post(
  "/end-order",
  stripePaymentMiddleware.stripePayEndpointIntentId,
  stripePaymentController
);

module.exports = router;
