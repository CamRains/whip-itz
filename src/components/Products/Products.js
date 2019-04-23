import React, { Component } from "react";
import axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
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





  

  render() {
    const products = this.state.products.map((product, index) => {
      return (
        <div>
          <div className="products-container" key={index}>
            <h2>{product.name}</h2>
            {product.price}
            {/* <img src={product.image} /> */}
            {product.description}
          </div>
          <div className="storefront-buttons">
            <button>Add to Cart</button>
          </div>
        </div>
      );
    });
    return <div>{products}</div>;
  }
}

export default Products;
