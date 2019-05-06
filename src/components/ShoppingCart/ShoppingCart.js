import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./shoppingCart.css";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      shoppingCart: [],
      quanitity: null
    };
  }

  componentDidMount = () => {
    this.getProductsFromCart();
  };

  getProductsFromCart = () => {
    axios.get("/api/products").then(res => {
      console.log("shopping CART get PRODUCTS function", res.data);
      this.setState({
        shoppingCart: res.data
      });
    });
  };

  removeFromCart = user_cart_id => {
    axios.delete(`/api/products?user_cart_id=${user_cart_id}`).then(res => {
      this.getProductsFromCart();
    });
  };
  editQuantity = (item, quantity) => {
    // let { quantity } = this.state;
    axios.put(`/api/products/${item}`, { quantity }).then(response => {
      this.getProductsFromCart();
    });
  };

  render() {
    const products = this.state.shoppingCart.map(product => {
      console.log("AHHHHHH MONSTERS", product);

      return (
        <div>
          <div className="product-container" key={product.product_id}>
          <img src={product.image} />
            <h2>{product.name}</h2>
            {product.price}
            {product.description}
            {product.image}
          </div>
          <div className="quantity">
            <button>QTY {product.quantity}</button>
            &nbsp;
            <select
              defaultValue={product.quantity}
              onChange={event =>
                this.editQuantity(product.user_cart_id, event.target.value)
              }
              type="number"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
            <div className="remove-button">
              <button onClick={() => this.removeFromCart(product.user_cart_id)}>
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Cart">
        {products[0] ? (
          <div>
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>

            {products}
          </div>
        ) : (
          <div>
            <h1>Shopping Cart is empyt go buy some schtufff</h1>

            <Link to="/products">
              <button>Return To Products</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;

// render() {
//   const products = this.state.products.map((product) => {
//     console.log(product);

//     return (
//       <div>
//         <div className="products-container" key={product.product_id}>
//           <h2>{product.name}</h2>
//           {product.price}
//           {/* <img src={product.image} /> */}
//           {product.description}
//         </div>
//         <div className="storefront-buttons">
//           <button onClick={() => this.addToCart(product)}>Add to Cart</button>
//         </div>
//       </div>
//     );
//   });
//   return <div>{products}</div>;
// }
