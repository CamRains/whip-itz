import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./about.css";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about">
        <div className="title">
          <h1>ABOUT US</h1>
        </div>
        <div className="paragraph">
          <p>
            Like many great companies, Whip-Itz started as a fun attempt to
            create a product better suited to our indivdiual needs. At Whip-itz,
            we realize how much fun night riding can be. However we were
            dissapointed with the available supply of whips for smaller
            vehicle-engine applications, such as 2 strokes and dirtbikes. We
            decided to do something about it and developed a prototype custom
            built to a specific electrical range in order to maximize light,
            while ensuring we did not overdraw the electrial system. "Maximum Light, Minimum Draw." - Cam Rains CEO
          </p>
        </div>
        <div class="container">
          <div class="grid">
            <div class="cell">
              <img
                src="https://s3-us-west-1.amazonaws.com/whipitz/IMG_5702.JPG"
                class="responsive-image"
              />
            </div>
            <div class="cell">
              <img
                src="https://s3-us-west-1.amazonaws.com/whipitz/Screen+Shot+2019-05-05+at+6.14.23+PM.png"
                class="responsive-image"
              />
            </div>
            <div class="cell">
              <img
                src="https://s3-us-west-1.amazonaws.com/whipitz/Screen+Shot+2019-05-05+at+6.06.48+PM.png"
                class="responsive-image"
              />
            </div>
            <div class="cell">
              <img
                src="https://s3-us-west-1.amazonaws.com/whipitz/Screen+Shot+2019-05-05+at+6.06.26+PM.png"
                class="responsive-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
