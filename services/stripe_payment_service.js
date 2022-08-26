exports.generateResponse = function (intent, callback) {
  switch (intent.status) {
    case "requires_action":
      return callback(
        {
          clientSecret: intent.clientSecret,
          requiredAction: true,
          status: intent.status,
        },
        null
      );
    case "required_payment_method":
      return callback(
        {
          error: "Your card was denied, please provide a new payment method",
        },
        null
      );
    case "succeeded":
      console.log("payment succeeded");
      return callback(null, {
        clientSecret: intent.clientSecret,
        status: intent.status,
      });
  }
  return callback({ error: "error" }, null);
};
