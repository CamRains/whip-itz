import axios from "axios";

const initialState = {
  user: null
};

const SET_USER = "SET_USER";
const SET_REGISTER = "SET_REGISTER";

export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_USER + "_FULFILLED":
      console.log("jbaijbfberdsnvoenov");
      return { ...state, user: action.payload };
    case SET_REGISTER + "_FULFILLED":
      console.log("after this i could sure use a nap");
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function requestUserData(email, password) {
  console.log("inside of request user data function", email, password);
  let data = axios
    .post("/auth/login", { email, password })
    .then(res => res.data);
  return {
    type: SET_USER,
    payload: data
  };
}

export function requestRegister(email, password, first_name, last_name) {
  console.log(
    "inside of the request for registration info",
    email,
    password,
    first_name,
    last_name
  );
  let register = axios
    .post("/auth/register", { email, password, first_name, last_name })
    .them(res => res.data);
  return {
    type: SET_REGISTER,
    payload: register
  };
}
