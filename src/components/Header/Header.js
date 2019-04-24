import React, { Component } from "react";
// import Logo from "./logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import axios from "axios";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guest: ""
    };

    this.getSession = this.getSession.bind(this);
  }
  componentDidMount() {
    this.getSession();
  }

  getSession() {
    axios.get("/auth/guest").then(res => {
      console.log(res.data);
      this.setState({
        guest: res.data
      });
    });
  }

  render() {
    return (
      <header>
        <div>
          <div className="header-container">
            <div className="logo-container">
              {/* <img
                className="logo-image"
                src={Logo}
                alt="Logo could not display" */}
            </div>
            <div className="nav-links">
              {/* <nav> */}
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              {/* </nav> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
