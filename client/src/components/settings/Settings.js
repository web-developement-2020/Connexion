import React, { Component } from "react";
import { Link } from "react-router-dom";

class settings extends Component {
  render() {
    return (
      <div className="settings">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Settings</h1>
                <p className="lead">You can modify your settings here</p>
                <hr />
                <Link to="/changePassword" className="btn btn-lg btn-info mr-2">
                  Change Password
                </Link>
                <Link to="/changeAvatar" className="btn btn-lg btn-info mr-2">
                  Change Avatar
                </Link>
                <Link to="/editProfile" className="btn btn-lg btn-info mr-2">
                  Edit Profile
                </Link>
                <Link to="/deleteAccount" className="btn btn-lg btn-info mr-2">
                  Delete Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
};
export default settings;