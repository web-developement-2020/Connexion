
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
import NavbarUser from './components/auth/NavbarUser'
import Profile from './components/auth/Profile';

import CreateProfile from './components/auth/CreateProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/NavBarUser' component={NavbarUser} />
        <Navbar />

        <main class="site-content">
          <Route exact path='/' component={Landing} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/post' component={Post} />
          <Route exact path='/addpost' component={CreatePost} />
          <Route exact path='/addprofile' component={CreateProfile} />
          <Route exact path='/profile' component={Profile} />          
          <Route exact path="/forgotPassword" component={ForgotPassword} />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;