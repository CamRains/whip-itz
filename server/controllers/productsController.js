module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");
    console.log("pC getAll");

    db.get_products()
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(err => console.log("error in getAll", err));
  },
  addToCart: (req, res) => {
    const user_id = req.session.user.user_id;
    const db = req.app.get("db");
    const { product_id, quantity } = req.body;
    console.log("products controller", req.body);
    db.UserCart([product_id, user_id])
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        console.error("Error in addToCart sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  },

  getProductsFromCart: (req, res) => {
    const db = req.app.get("db");
    console.log("pC getProducts");

    db.get_Products_From_Cart()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.log("error in get products from cart", err);
        res
          .status(500)
          .send("An error has occured in the get prodicts fromc cart function");
      });
  }
};
