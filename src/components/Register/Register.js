import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          loggedInUser: {}
        };
        this.register = this.register.bind(this)
    }
    componentDidMount() {
        axios.get("/auth/guest").then(res => {
          this.setState({
            loggedInUser: res.data
          });
        });
      }

    async register() {
        let { email, password, first_name, last_name } = this.state;
        axios
          .post("/auth/register", { email, password, first_name, last_name })
          .then(res => {
            this.setState({
              loggedInUser: res.data,
              email: "",
              password: "",
              first_name: "",
              last_name: ""
            });
          });
      }




    render (){
        let { loggedInUser, email, password, first_name, last_name } = this.state;

        return(
            <div className="register-form">
          <div>
            <li>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Email"
              />
            </li>
            <li>
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="text"
                placeholder="Password"
              />
            </li>
            <li>
              <input
                value={first_name}
                onChange={e => this.setState({ first_name: e.target.value })}
                type="text"
                placeholder="First name"
              />
            </li>
            <li>
              <input
                value={last_name}
                onChange={e => this.setState({ last_name: e.target.value })}
                type="text"
                placeholder="Last name"
              />
            </li>
            &nbsp;
            <div>
                <Link to="/products" >
                <button>Complete Registration</button>
                </Link>
            </div>
            
          </div>
        </div>
        )
    }
}


export default Register