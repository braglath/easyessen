const stripe = require("stripe")(
  "sk_test_51LZqp2SDQW4rw8MZPkCM8p9ZYnSWRm0tyA5s9DmYVBUQiQSlEvPvshcwdBRHyxNoZlv8GWLtQmRYXirt2cLekSYz00W9emSXKz"
);

const stripePaymentService = require("../services/stripe_payment_service");
exports.createOrder = async (req, res, next) => {
  const { paymentMethodId, items, currency, useStripeSdk } = req.body;
  const orderAmount = 1000;

  try {
    a;
    if (paymentMethodId) {
      //? create a payment intent
      const params = {
        amount: orderAmount,
        confirm: true,
        confirmation_method: "manual",
        currency: currency,
        paymentMethod: paymentMethodId,
        use_stripe_sdk: useStripeSdk,
      };
      const intent = await stripe.paymentIntents.create(params);
      console.log(`stripe payment intent - ${intent}`);
      stripePaymentService.generateResponse(intent, function (err, result) {
        if (err) return next({ message: err });
        //? else
        req.stripePayment = result;
        next();
      });
    }
  } catch (e) {
    console.log(`stripe payment error - ${e}`);
    next({ message: e.message });
  }
};

exports.stripePayEndpointIntentId = async (req, res, next) => {
  const { paymentIntentId } = req.body;

  try {
    if (paymentIntentId) {
      const intent = await stripe.paymentIntents.confirm(paymentIntentId);
      console.log(`stripe payment endpoint intent - ${intent}`);
      stripePaymentService.generateResponse(intent, function (err, result) {
        if (err) return next({ message: err });
        //? else
        req.stripePayment = result;
        next();
      });
    }
    res.sendStatus(400);
  } catch (e) {
    console.log(`stripe payment endpoint error - ${e}`);
    next({ message: e.message });
  }
};
