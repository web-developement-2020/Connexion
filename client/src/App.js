import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import ChangeAvatar from "./components/changeAvatar/ChangeAvatar";
import ChangePassword from './components/changePassword/ChangePassword';

import ForgotPassword from './components/auth/ForgotPassword';
import Profile from './components/auth/Profile';
import jwt_decode from 'jwt-decode';
import { logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import { SET_USER } from './actions/types';
//import CreateProfile from './components/auth/CreateProfile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';

import CreatePost from './components/auth/CreatePost';
import Post from './components/auth/Post';
import Settings from './components/settings/Settings';
import PrivateRoute from "./components/common/PrivateRoute";

if (localStorage.jwtToken) {
  //decode
  const decoded = jwt_decode(localStorage.jwtToken);
  //check the expiry of the token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Expired
    //Logout user
    store.dispatch(logoutUser());
    //Redirect user to login
    window.location.href = '/login';
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
            <main className="site-content">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
             
              <Route exact path="/post" component={Post} />
              <Route exact path="/createpost" component={CreatePost} />
              <Route exact path="/profile" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/settings" component={Settings} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/changePassword"
                  component={ChangePassword}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/changeAvatar"
                  component={ChangeAvatar}
                />
              </Switch>
             
             
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
