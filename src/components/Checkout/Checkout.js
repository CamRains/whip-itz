import React, { Component } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      shoppingCart: [],
      quanitity: null,
      finalSum: 0
    };
    this.onToken = this.onToken.bind(this);
  }

  componentDidMount = () => {
    this.getProductsFromCart();
    this.SumTotal();
    // this.sendFinalSum()
  };

  getProductsFromCart = () => {
    axios.get("/api/products").then(res => {
      //   console.log("shopping CART get PRODUCTS function", res.data);
      this.setState({
        shoppingCart: res.data
      });
      console.log(this.state.shoppingCart[0]);
    });
  };

  SumTotal = () => {
    axios.get("/api/products").then(res => {
      console.log(res.data);
      const { price, quantity } = res.data[0];
      console.log(price, quantity);
      this.setState({
        finalSum: res.data
          .map(x => {
            return x.price * x.quantity + x.price * x.quantity * 0.08;
          })
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      });
      console.log(this.state.finalSum);
    });
  };

  // sendFinalSum = (finalSum) => {
  //   console.log(this.state.finalSum)
  //   // app.post('/api/stripe')

  // }




  onToken(token) {
    console.log("onToken", token);
    fetch("/api/stripe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stripeToken: token.id
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json");
        console.log(json);
      });
  }

  render() {
    const products = this.state.shoppingCart.map(product => {
      return (
        <div>
          <div className="product-container" key={product.product_id}>
            <h2>{product.name}</h2>
            {product.price}
            {product.description}
            {product.image}
          </div>
          <div className="quantity">
            <button>QTY {product.quantity}</button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="checkout">
          <h3>Total={"$" + this.state.finalSum}</h3>
          <div>{products}</div>
        </div>
        <div>
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_Q1hfudJFuWLCqMZoKqHYoSH3004Sfe2ucM"
          />
        </div>
      </div>
    );
  }
}

export default Checkout;
