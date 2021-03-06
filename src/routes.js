import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"
// import Header from "./components/Header/Header"    did this in app.js since it will always show up

export default (
  <Switch>
    <Route  path="/products" component={Products}  />
    <Route  path="/about" component={About}  />
    <Route  path="/cart" component={ShoppingCart} />
    <Route  path="/login" component={Login} />
    <Route  path="/register" component={Register} />
    <Route  path="/checkout" component={Checkout} />
    <Route  path="/gallery" component={Gallery} />
    <Route  path="/" component={Home} />
    
  </Switch>
);
