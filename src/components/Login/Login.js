import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { requestUserData } from "../../ducks/userReducer";
import { connect } from "react-redux";
import "./login.css";
// import Header from "../Header/Header";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      // first_name: "",
      // last_name: "",
      loggedInUser: {},
      message: ""
    };

    // this.login = this.login.bind(this);
    // this.register = this.register.bind(this);
    // moved to register component
  }
  // componentDidMount() {
  // this.props.requestUserData();
  // axios.get("/auth/guest").then(res => {
  //   this.setState({
  //     loggedInUser: res.data
  //   });
  // });
  // }

  // login() {
  //   let { email, password } = this.state;
  //   axios.post("/auth/login", { email, password }).then(res => {
  //     console.log("LABEL", typeof res.data);
  //     console.log("SAHHAHAHAHAHA", res.data);
  //     if (typeof res.data == "string") {
  //       console.log("whatever hit");

  //       this.setState({
  //         message: res.data
  //       });
  //     } else {
  //       this.setState({
  //         loggedInUser: res.data,
  //         email: "",
  //         password: "",
  //         message: ""
  //       });
  // this.props.history.push("/products");
  //     }
  //   });
  // }

  logout() {
    axios.get("/auth/logout").then(() => {
      this.setState({ loggedInUser: {} });
    });
  }

  render() {
    let { loggedInUser, email, password } = this.state;
    console.log(this.props);
    return (
      <div className="form-container-parent">
        <div className="login-form">
          <div className="inputs">
            <li>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
                placeholder="Email"
              />
              &nbsp;
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Password"
              />
            </li>
          </div>
          {loggedInUser.email ? (
            <button onClick={() => this.logout()}>Logout</button>
          ) : (
            <button
              onClick={() => {
                this.props.requestUserData(
                  this.state.email,
                  this.state.password,
                  this.props.history
                );
                this.setState({
                  email: "",
                  password: ""
                });
              }}
            >
              Login
            </button>
          )}
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        &nbsp;
        {this.props.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const MapDispatchToProps = {
  requestUserData
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Login);
