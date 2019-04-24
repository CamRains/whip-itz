import {createStore, applyMiddleware} from 'redux'
import reducer from './userReducer'
import promiseMiddleware from  "redux-promise-middleware"
export default createStore(reducer, applyMiddleware(promiseMiddleware))