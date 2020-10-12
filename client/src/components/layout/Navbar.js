import logo from '../../img/connexion-app.svg';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const {isAuthenticated, user} = this.props.auth;

    const guestLinks = (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item nav'>
                <Link className='nav-link' to='/register' id="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className='nav-item nav'>
                <Link className='nav-link' to='/login' id="nav-link2">
                  Login
                </Link>
              </li>
            </ul>
          
    );

  const authLinks = (
    <nav className='navbar navbar-expand-sm navbar-light bg-light mb-4'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} width="auto" height="100%" alt="connexion logo" id="logo"/>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#mobile-nav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div ClassName="collapse navbar-collapse" id="mobile-nav">
          <ul className='navbar-nav ml-auto'>

          <li>
            <form id="searchbar" action="" ClassName="nav">
              <input id="search-input" type="search" />
              <i className="fa fa-search" id="search-icon"></i>
            </form>
            </li>

            <li className='nav-item nav'>
              <Link className='nav-link d-md-block ' to='/PostFeed' id="nav-link">
              <i ClassName="fas fa-home"></i>
              </Link>
            </li>

            <li className='nav-item nav'>
              <Link className='nav-link d-md-block ' to='/createpost' id="nav-link">
              <i ClassName="fas fa-pencil-alt"></i>
              </Link>
            </li>

            <li className='nav-item nav'>
              <Link className='nav-link d-md-block ' to='/settings' id="nav-link">
              <i className="fa fa-cog"></i>
              </Link>
            </li>
            
            <li className='nav-item nav'>
              <Link className='nav-link' to='/profile' id="nav-img">
                  <img
                    className='profile-img rounded-circle d-md-block'
                    src='https:\/\/0.gravatar.com\/avatar\/b258c6a54d33a27183639ac972107a12=150'
                    alt=''
                  />
              </Link>
            </li>
            <li className='nav-item nav'>
                <a href=""
                  onClick={this.onLogoutClick.bind(this)}
                  className="nav-link"
                >
                  Logout
                </a>
            </li>
          </ul>


        </div>
        </div>
    </nav>
  );

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} width="auto" height="100%" alt="connexion logo" id="logo"/>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">

            {isAuthenticated? authLinks : guestLinks}

          </div>
         </div>
      </nav>
  ) 
  }
}


Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth:state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);