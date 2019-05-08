import React, { Component } from "react";
import axios from "axios";
import "./Products.css";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      shoppingCart: [],
      user: ""
    };
    this.checkUser = this.checkUser.bind(this);
  }

  componentDidMount() {
    this.getAll();
    this.checkUser();
  }

  getAll = () => {
    axios.get("/api/store").then(res => {
      console.log(res.data);
      this.setState({
        products: res.data
      });
    });
  };

  checkUser = () => {
    axios.get("/api/products").then(res => {
      console.log("shopping CART get PRODUCTS function", res.data[0].user_id);
      this.setState({
        user: res.data[0].user_id
      });
      console.log(this.state.user);
    });
  };

  // doma  get call to the soecif users cart => from there we will find the index, and see if the item exists within th users cart
  // if it doesnt do an axios post to add to the cart
  // if does exist we will do a put

  // addToCart = product => {
  //   console.log("dhafwegifbhabhbLABEL BALLS", product);
  //   let index = UserCart.findIndex(
  //     product => product.product_id === +req.params.product_id
  //   );
  //   axios.get("/api/products").then(res => {
  //     if (index !== -1) {
  //       axios.put(`/api/products/${item}`, { quantity }).then(res => res.data)
  //     } else {
  //       axios.post("/api/products", product).then(res => {
  //         console.log(res);
  //       });
  //     }
  //   });
  // };

  addToCart = product => {
    console.log("dhafwegifbhabhbLABEL BALLS", product);
    axios.post(`/api/products/${product.product_id}`, product).then(res => {
      console.log(product);
    });
  };

  render() {
    const products = this.state.products.map(product => {
      console.log(product);

      return (
        <div className="products-container" key={product.product_id}>
          <img src={product.image} />
          <h2>{product.name}</h2>
          <h3>{"$" + product.price}</h3>
          <h4>{product.description}</h4>
          &nbsp;
          <button
            onClick={() =>
              this.state.user
                ? this.addToCart(product)
                : alert("Must Login to add to cart")
            }
          >
            Add to Cart
          </button>
        </div>
      );
    });
    return (
      <div className="father">
        <div className="title-products">
          <h1>PRODUCTS</h1>
        </div>
        <div className="products-display">{products}</div>
      </div>
    );
  }
}

export default Products;
