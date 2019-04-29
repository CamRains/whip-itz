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
      console.log(res);
    });
  };

  render() {
    const products = this.state.products.map(product => {
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
