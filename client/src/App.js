<<<<<<< HEAD
import React, { Component } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import ForgotPassword from "./components/auth/ForgotPassword";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Facebook from "./components/Facebook";
import store from "./store";
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
=======

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CreatePost from './components/auth/CreatePost';
import Post from './components/auth/Post';
import Facebook from "./components/Facebook";
import ForgotPassword from "./components/auth/ForgotPassword";

import CreateProfile from './components/auth/CreateProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/post' component={Post} />
        <Route exact path='/addpost' component={CreatePost} />
        <Route exact path="/profile" component={CreateProfile} />
     <Route exact path="/forgotPassword" component={ForgotPassword} />
        <p>Facebook Authentication</p>
        <Facebook />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 0a33fcf6c146e209e79408020445ed1b069e7589
