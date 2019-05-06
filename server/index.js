const express = require("express");
const massive = require("massive");
const app = express();
const pC = require("./controllers/productsController");
const aC = require("./controllers/authController");
const sC = require("./controllers/stripeController")
const session = require("express-session");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, STRIPE_KEY } = process.env;
const stripe = require("stripe")(STRIPE_KEY)
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
app.use( express.static( `${__dirname}/../build` ) );

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
app.post("/api/stripe", sC.purchaseProducts)
// app.post("/api/stripe1", sC.sendPrice)

//auth?

app.post("/auth/register", aC.register);
app.post("/auth/login", aC.login);
app.get("/auth/logout", aC.logout);
app.get("/auth/guest", aC.getSession);





const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(SERVER_PORT || 5150, () =>
  console.log(`Damn that ${SERVER_PORT}  is whippin`)
);


module.exports.stripe = stripe