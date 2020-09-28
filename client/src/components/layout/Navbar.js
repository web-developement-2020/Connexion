import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/connexion-app.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} width="auto" height="100%" alt="connexion logo"/>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/register' id="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login' id="nav-link2">
                  Login
                </Link>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
      </nav>
    );
  }
}

export default Navbar;
