import React, { Component } from "react";
import axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      shoppingCart: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get("/api/store").then(res => {
      console.log(res.data);
      this.setState({
        products: res.data
      });
    });
  };

  addToCart = product => {
    console.log("dhafwegifbhabhbLABEL BALLS", product)
    axios.post("/api/products", product).then(res => {
      console.log(res);
    });
  };

  render() {
    const products = this.state.products.map((product) => {
      console.log(product);
      
      return (
        <div>
          <div className="products-container" key={product.product_id}>
            <h2>{product.name}</h2>
            {product.price}
            {/* <img src={product.image} /> */}
            {product.description}
          </div>
          <div className="storefront-buttons">
            <button onClick={() => this.addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      );
    });
    return <div>{products}</div>;
  }
}

export default Products;
