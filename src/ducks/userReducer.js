import axios from "axios";

const initialState = {
  user: null,
  guest: "",
  message: ""
};

const SET_USER = "SET_USER";
const SET_REGISTER = "SET_REGISTER";
const GET_USER = "GET_USER";
const LOGOUT = "LOGOUT";

export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_USER + "_FULFILLED":
      console.log("jbaijbfberdsnvoenov", action.payload);
      if (typeof action.payload == "string") {
        return { ...state, message: action.payload};
      } else {
        console.log(action);
        //  below we can not add keys to the action a=object
        // action.history.push("/products");
        return { ...state,message:"", user: action.payload, guest: null};
      }
    case SET_REGISTER + "_FULFILLED":
      console.log("after this i could sure use a nap", action.payload);
      if (typeof action.payload == "string") {
        return { ...state, message: action.payload };
      } else {
        console.log("register69696", action);
        return { ...state, user: action.payload };
      }
    case GET_USER + "_FULFILLED":
      if (action.payload.username == "guest") {
        return { ...state, guest: action.payload };
      } else {
        return { ...state, user: action.payload };
      }
    case LOGOUT + "_FULFILLED":
      return { ...state, user: null };
    default:
      return state;
  }
}

export function requestRegister(
  email,
  password,
  first_name,
  last_name,
  history
) {
  console.log(
    "inside of the request for registration info",
    email,
    password,
    first_name,
    last_name
  );
  let register = axios
    .post("/auth/register", { email, password, first_name, last_name })
    .then(res => {
      if (typeof res.data !== "string") {
        history.push("/products");
      }
      return res.data;
    });
  return {
    type: SET_REGISTER,
    payload: register
  };
}
export function requestUserData(email, password, history) {
  console.log("inside of request user data function", email, password);
  let data = axios.post("/auth/login", { email, password }).then(res => {
    if (typeof res.data !== "string") {
      history.push("/products");
    }
    return res.data;
  });
  return {
    type: SET_USER,
    payload: data
  };
}

export function requestUser(user) {
  let userdata = axios.get("/auth/guest").then(res => res.data);

  return {
    type: GET_USER,
    payload: userdata
  };
}

export function logout() {
  let userLogout = axios.get("/auth/logout").then(res => res.data);
  return {
    type: LOGOUT,
    payload: userLogout
  };
}

// getSession() {
//   axios.get("/auth/guest").then(res => {
//     console.log(res.data);
//     this.setState({
//       guest: res.data
//     });
//   });
// }
