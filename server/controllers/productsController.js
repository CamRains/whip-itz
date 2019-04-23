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
    const db = req.app.get("db");
    const { name, price, description, image } = req.body;
    db.addToCart([name, price, description, image,admin_id])
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
};
