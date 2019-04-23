import React, { Component } from "react";
import Header from "../Header/Header";

class Login extends Component {


  
  render() {
    return (
      <div>
        <div className="header">{Header}</div>
        <div>
            <button>
                Login
            </button>
            <button>
                Register
            </button>
        </div>
      </div>
    );
  }
}

export default Login;
