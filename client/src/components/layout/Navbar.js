import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/connexion-app.svg';

class Navbar extends Component {
  render() {
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
          </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;
