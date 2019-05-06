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
          <video autoPlay loop muted>
            <source
              src="https://s3-us-west-1.amazonaws.com/whipitz/whipitz1-propercut1.mov"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  }
}

export default Home;
