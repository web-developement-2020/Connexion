import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/connexion-app.svg';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='lt-overlay landing-inner text-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h1 className='display-3 mb-4'>
                  <img
                    src={logo}
                    width='auto'
                    height='100%'
                    alt='connexion logo'
                  />
                </h1>
                <p className='lead'>
                  {' '}
                  <span>SHARE.</span> <span>CONNECT.</span> <span>CREATE.</span>
                </p>
                <hr />
                <div className='d-flex flex-row  justify-content-center'>
                  <Link
                    to='/register'
                    className='btn btn-lg btn-light mr-2 bg-light'
                    id='signup-link'
                  >
                    Register
                  </Link>
                  <Link
                    to='/login'
                    className='btn btn-lg btn-light bg-light'
                    id='login-link'
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
