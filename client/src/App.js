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
