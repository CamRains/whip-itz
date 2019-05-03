const stripe = require("../index");

module.exports = {
  purchaseProducts: (req, res) => {
    stripe.stripe.charges
      .create({
        amount: 10,
        currency: "usd",
        description: "Thankyou, your purchase has been completed",
        source: req.body.token.id
      })
      .then(res => {
        res.status(200).send(res);
      });
  }

  // app.post('/api/stripe', function (req,res,next) {
  // const stripeToken = req.body.stripeToken

  // })
};
