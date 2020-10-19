import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import ChangeAvatar from "./components/changeAvatar/ChangeAvatar";
import ChangePassword from './components/changePassword/ChangePassword';
import ForgotPassword from './components/auth/ForgotPassword';
//import Profile from './components/auth/Profile';

import GetProfileByHandle from "./components/getprofilebyhandle/GetProfileByHandle";
import CreateProfile from './components/auth/CreateProfile';
import DeleteAccount from './components/deleteAccount/DeleteAccount';
import jwt_decode from 'jwt-decode';
import { logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import { SET_USER } from './actions/types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from "./components/not-found/NotFound";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';
import CreatePost from './components/createpost/CreatePost';
import PostFeed from './components/PostFeed/PostFeed';
import Settings from './components/settings/Settings';
import PrivateRoute from "./components/common/PrivateRoute";
import EditProfile from './components/editProfile/EditProfile';
import Post from './components/auth/Post';
import { getProfileByHandle } from './actions/profileActions';

//import PostFeed from './components/postFeed/PostFeed';


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
              {/* LEAVING THESE HERE FOR DEV; THERE ARE UPDATED ONES FOR DEPLOYMENT */}
              
              <Route exact path="/post" component={Post} />
              <Route exact path="/not-found" component={NotFound} />
              {/* END DEV ROUTES */}
              <Switch>
                <PrivateRoute
                  exact
                  path="/getprofilebyhandle"
                  component={getProfileByHandle}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/createprofile"
                  component={CreateProfile}
                />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/createpost" component={CreatePost} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/postfeed" component={PostFeed} />
              </Switch>
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
              <Switch>
                <PrivateRoute
                  exact
                  path="/deleteAccount"
                  component={DeleteAccount}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/editProfile"
                  component={EditProfile}
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
