const express = require("express");
const massive = require("massive");
const app = express();
const pC = require("./controllers/productsController");
const aC = require("./controllers/authController");
const session = require("express-session");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
app.use(express.json());
massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  // dbInstance.init();
  console.log("you done did it right my doode");
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

//admin
app.get("/api/auth", (req, res) => {
  res.status(200).send(req.session.user);
});

// products
app.get("/api/store", pC.getAll);
app.get("/api/products",pC.getProductsFromCart)
app.post("/api/products/:product_id", pC.addToCart);
app.put("/api/products/:user_cart_id",pC.updateCartQuantity)
app.delete("/api/products",pC.removeFromCart)


//auth?

app.post("/auth/register", aC.register);
app.post("/auth/login", aC.login);
app.get("/auth/logout", aC.logout);
app.get("/auth/guest", aC.getSession);

app.listen(SERVER_PORT || 5150, () =>
  console.log(`Damn that ${SERVER_PORT}  is whippin`)
);
