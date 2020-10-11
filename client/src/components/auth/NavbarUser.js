import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/connexion-app.svg';

class NavbarUser extends Component {
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
          <div class="collapse navbar-collapse" id="mobile-nav">
            <ul className='navbar-nav ml-auto'>

            <li>
              <form id="searchbar" action="" class="nav">
                <input id="search-input" type="search" />
                <i className="fa fa-search" id="search-icon"></i>
              </form>
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

            </ul>
          </div>
          </div>
      </nav>
    );
  }
}

export default NavbarUser;
