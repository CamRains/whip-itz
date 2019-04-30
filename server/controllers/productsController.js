module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");
    // console.log("pC getAll");

    db.get_products()
      .then(products => {
        // console.log(products);
        res.status(200).send(products);
      })
      .catch(err => console.log("error in getAll", err));
  },
  addToCart: (req, res) => {
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    // const { user_cart_id } = 
    // console.log(Response,"1 ++++++++++++++")
    // console.log("QUEEEEER LABEL", req.query)
    const { product_id, quantity } = req.body;
    console.log("add to cart ========== monkeies", req.body);
    // Step 1: Grab cart from DB

    let UserCart = [];
    db.get_UserCart(user_id).then(Response => {
      // console.log(Response, "2INSERT YO MOMMA JOKE HERE")
      UserCart = Response;
      // console.log(UserCart, "this is the usercart label");
      // there seems to be a bug here where ther is one more product listed in the terminal than there is in the actual cart.

      // Step 2: Check if product_id exists in cart
      // console.log(req.params.product_id, "HUNTERS WATCHINGGGGGG");
      // console.log(req.params, "HUNTERS WATCHINGGGGGG");
      console.log("HUNTERS WATCHINGGGGGG");
      let index = UserCart.findIndex(
        product => product.product_id === +req.params.product_id
      );
      console.log("this it the index checl", index);
      if (index !== -1) {
        console.log("buttcheaks", UserCart[index]);
        let {user_cart_id} = UserCart[index]
        let newQuantity = UserCart[index].quantity;
        newQuantity += 1;
        console.log(newQuantity, "THIS IS KLLING ME");
        let finalQuantity = quantity ? quantity : newQuantity;
        console.log(
          typeof finalQuantity,
          user_cart_id,
          product_id,
          finalQuantity
        );

        db.updateUserCart([user_cart_id, finalQuantity]).then(
          product => {
            res.status(200).send(product);
          }
        );
      } else {
        // }
        // )
        // Step 3:
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
      }
    });
  },

  getProductsFromCart: (req, res) => {
    const db = req.app.get("db");
    console.log("pC getProducts");
    const user_id = req.session.user.user_id;
    db.get_Products_From_Cart(user_id)
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.log("error in get products from cart", err);
        res
          .status(500)
          .send("An error has occured in the get prodicts fromc cart function");
      });
  },
  removeFromCart: (req, res) => {
    const db = req.app.get("db");
    const { user_cart_id } = req.query;
    console.log("remove from cart LABEL", req.query)
    db.remove_product(user_cart_id)
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err =>
        console.log("error in the remove products function server side", err)
      );
  },

  updateCartQuantity: (req, res) => {
    const db = req.app.get("db");
    const { quantity } = req.body;
    const { user_cart_id } = req.params;
    console.log("@@@@@@@@@@@@@@@",req.body)
    db.updateUserCart([user_cart_id,quantity])
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err =>
        console.log("error in the update cart quantity function server side")
      );
  }
};
