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

    this.state = {
      toggle: false,
      Login: false,
      //   guest: "",
      user: ""
      // };

      // this.getSession = this.getSession.bind(this);
    };
  }

  toggleSideBar() {
    this.setState(prevState => {
      console.log(this.state.toggle);
      return {
        toggle: !prevState.toggle
      };
    });
  }

  // toggleLogin() {
  //   this.setState(prevState => {
  //     console.log(this.state.toggle);
  //     return {
  //       toggle: !prevState.toggle
  //     };
  //   });
  // }
  // componentDidMount() {
  //   this.props.requestUser();
  // }
  // logout() {
  //   this.props.logout();
  // }

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
      <header>
        <div>
          <div className="logo-container">
            <img src="https://mark.trademarkia.com/services/logo.ashx?sid=77968400" />
            &nbsp;
            &nbsp;
            <a href="#/home">Whip-Itz</a>
          </div>
          <button onClick={() => this.toggleSideBar()}>
            {this.state.toggle ? <p>&#x2630;</p> : <p>&#x2630;</p>}
          </button>

          <nav className={this.state.toggle ? "show" : "dont"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact</Link>
              </li> */}
              <li>
                {/* <a href="#/contact">Contact</a> */}
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                {this.props.user ? (
                  <Link to="/login" onClick={this.props.logout}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const MapDispatchToProps = {
  requestUser,
  logout
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Header);
