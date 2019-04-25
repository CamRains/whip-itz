import React, { Component } from "react";
// import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { requestUser } from "../../ducks/userReducer";
import { logout } from "../../ducks/userReducer";
import { connect } from "react-redux";
import "./header.css";
// import {Logo} from "../Header/logo.png";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   guest: "",
    //   user: ""
    // };

    // this.getSession = this.getSession.bind(this);
  }
  componentDidMount() {
    this.props.requestUser();
  }
  logout() {
    this.props.logout()
  }

  // getSession() {
  //   axios.get("/auth/guest").then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       guest: res.data
  //     });
  //   });
  // }

  render() {
    console.log(this.props);
    return (
      // <header>

      <div className="header-container">
        <div className="logo-container">
          <img
            src="https://mark.trademarkia.com/services/logo.ashx?sid=77968400"
            alt="This is the logo"
          />
        </div>
        <div>
          <div className="nav-links">
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
                {this.props.user ? <button onClick= {this.props.logout}>Logout</button> : <Link to="/login">Login</Link>  }
                
              </li>
            </ul>
          </div>
        </div>
      </div>

      // </header>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const MapDispatchToProps = {
  requestUser, logout
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Header);
