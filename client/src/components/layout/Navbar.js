import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <object type="image/svg+xml" data="../../img/connexion-app.svg"></object>
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
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
      </nav>
    );
  }
}

export default Navbar;
