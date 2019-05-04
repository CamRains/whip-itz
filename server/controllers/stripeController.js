const stripe = require("../index");

module.exports = {
  purchaseProducts: (req, res) => {
      const stripeToken = req.body.stripeToken
    stripe.stripe.charges
      .create({
        amount: 1000,
        currency: "usd",
        description: "TEST CHARGE",
        source: stripeToken
      })
      .then(res => {
          console.log(res," FRIDAY ayyyyyyay")
        res.status(200).send(res);
      }).catch(err => {
        console.error("Error in purchase products", err);
        res
          .status(500)
          .send({ message: "An Error has occurred  ^^^^^^^^^^^ ", err });
      });
  }

  // app.post('/api/stripe', function (req,res,next) {
  // const stripeToken = req.body.stripeToken

  // })
};
