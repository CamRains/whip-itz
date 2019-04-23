import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="landing-page">
        <Link to="products">
          <button> Products</button>
        </Link>
      </div>
    );
  }
}

export default Home;
