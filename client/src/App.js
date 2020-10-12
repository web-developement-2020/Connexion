
import React, { Component } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import ForgotPassword from "./components/auth/ForgotPassword";
import Profile from './components/auth/Profile';
import jwt_decode from 'jwt-decode';
import {logoutUser} from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import {SET_USER} from './actions/types'

import CreateProfile from './components/auth/CreateProfile';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Facebook from "./components/Facebook";
import store from "./store";


if (localStorage.jwtToken){
  //decode
  const decoded = jwt_decode(localStorage.jwtToken);
  //check the expiry of the token
  const currentTime = Date.now()/1000;
  if (decoded.exp < currentTime){
    //Expired
    //Logout user
    store.dispatch(logoutUser());
    //Redirect user to login
    window.location.href = "/login";
  }

  //Set auth header
  setAuthToken(localStorage.jwtToken);
  //dispatch
  store.dispatch({
    type: SET_USER,
    payload: decoded,
  });
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/LoginUsingFacebook" component={Facebook} />
            {/* <p>Facebook Authentication</p>
        <Facebook /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }

}
export default App;

