import React, { Component } from "react";
// import Logo from "./logo.png";
import { Link } from "react-router-dom";
import "./header.css";
// import axios from 'axios'
class Header extends Component {
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
              />
            </div>

            <nav>
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
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
