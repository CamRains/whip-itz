import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import axios from "axios";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="bottoms-up">
          {" "}
          ©Copyright 2018 Whip-itz®. All Rights Reserved. Designed By CRAINS.
          This is for educational purposes only, subject to future change.
          Current Content is MOSTLY nonoriginal that I take zero claim/credit
          for. Credit to Buggywhips.com/5150whips.com/etc. Non-original content
          will be changed and removed prior to profitable operation.
          {/* <div className="ps"> Whip-Itz.com BullheadCity Az</div> */}
        </div>
        
      </footer>
    );
  }
}
export default Footer;
