import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="landing-page">
        <div className="products-button">
          <div>
            <Link to="products">
              <button> Products</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
