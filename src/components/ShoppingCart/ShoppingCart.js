import React, { Component } from "react";
import axios from "axios";
import "./shoppingCart.css";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      shoppingCart: []
    };
  }

  componentDidMount() {
    this.getProductsFromCart();
  }

  getProductsFromCart = () => {
    axios.get("/api/store").then(res => {
      console.log("shopping cart get products function", res.data);
      this.setState({
        shoppingCart: res.data
      });
    });
  };

  render() {
      const {shoppingCart} = this.state
    return <div>
    {shoppingCart}
    </div>;
  }
}

export default ShoppingCart;
