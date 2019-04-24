import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Header from "../Header/Header";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      loggedInUser: {}
    };

    this.login = this.login.bind(this);
    // this.register = this.register.bind(this);
    // moved to register component
  }
  componentDidMount() {
    axios.get("/auth/guest").then(res => {
      this.setState({
        loggedInUser: res.data
      });
    });
  }

  async login() {
    let { email, password } = this.state;
    axios.post("/auth/login", { email, password }).then(res => {
      this.setState({
        loggedInUser: res.data,
        email: "",
        password: ""
      });
    });
  }

  // async register() {
  //   let { email, password, first_name, last_name } = this.state;
  //   axios
  //     .post("/auth/register", { email, password, first_name, last_name })
  //     .then(res => {
  //       this.setState({
  //         loggedInUser: res.data,
  //         email: "",
  //         password: "",
  //         first_name: "",
  //         last_name: ""
  //       });
  //     });
  // }

  logout() {
    axios.get("/auth/logout").then(() => {
      this.setState({ loggedInUser: {} });
    });
  }

  render() {
    let { loggedInUser, email, password, first_name, last_name } = this.state;
    console.log(this.props);
    return (
      <div className="form-container-parent">
        <div className="login-form">
          <div>
            <li>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="text"
                placeholder="Password"
              />
            </li>
          </div>
          {loggedInUser.email ? (
            <button onClick={() => this.logout()}>Logout</button>
          ) : (
            <button onClick={() => this.login()}>Login</button>
          )}
        </div>
        &nbsp;
        <div>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
