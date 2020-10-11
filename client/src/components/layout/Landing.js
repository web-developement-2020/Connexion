import React, { Component } from "react";
import { Link } from "react-router-dom";
class landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />

                <Link to='/register' className='btn btn-lg btn-info mr-2' id="signup-link">

                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
                <Link to="/forgotPassword" className="btn btn-lg btn-light">
                  ForgotPassword
                </Link>
                <Link to="/loginUsingFacebook" className="btn btn-lg btn-light">
                Login using facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default landing;
