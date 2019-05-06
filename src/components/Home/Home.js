import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
      <div className="landing-page">
        {/* <video autoPlay loop muted >
        <source src="" */}
        {/* </video> */}
        
        
        <div className="products-button">
          <div>
            <Link to="products">
              <button> See More </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
