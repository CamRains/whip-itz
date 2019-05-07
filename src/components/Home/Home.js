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
        <div className="landing-page-picture">
          <div className="products-button">
            <div>
              <Link to="products">
                <button> See More </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing-page-video">
          <video width="100%" height="100%" autoPlay loop muted>
            <source
              src="https://s3-us-west-1.amazonaws.com/whipitz/final-final-10.mp4"
              type="video/mp4"
              />
              <button>See More </button>
          </video>
        </div>
      </div>
    );
  }
}

export default Home;
