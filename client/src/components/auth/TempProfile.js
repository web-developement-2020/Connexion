import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="container">
            <div className="row">
              <div className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-2 profile-content">
                    <Link to="profile.html">
                      <img
                        className="profile-img rounded-circle d-none d-md-block"
                        src="https:\/\/0.gravatar.com\/avatar\/b258c6a54d33a27183639ac972107a12=150"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-md-10">
                    <h2 className="header" align="right">
                      <i className="fas fa-user"></i> Profile
                    </h2>
                    <h6 className="card-title">Michael Dam</h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
                <div className="row followers-following">
                  <div className="col-md-2"></div>
                  <div className="col-md-3">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-people-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                      />
                    </svg>
                    <small> followers: 40</small>
                  </div>
                  <div className="col-md-3">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-people"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      />
                    </svg>
                    <small> following: 100</small>
                  </div>
                </div>

                <span className="border border-warning rounded-sm">
                  <div className="row">
                    <div className="col-md-2 profile">
                      <h5 className="profile-header">Info</h5>
                    </div>
                    <div className="col-md-10">
                      <div className="profile-content">
                        <p className="profile-sub-title">
                          handle:{" "}
                          <span className="profile-text">Lorem ipsum</span>
                        </p>
                        <p className="profile-sub-title">
                          website:{" "}
                          <span className="profile-text">
                            https://www.mywebsite.com
                          </span>
                        </p>
                        <p className="profile-sub-title">
                          location:{" "}
                          <span className="profile-text">Kirkland, WA</span>
                        </p>
                        <p className="profile-sub-title">
                          bio:{" "}
                          <span className="profile-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                          </span>
                        </p>

                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2 profile">
                      <h5 className="profile-header">Social Media</h5>
                    </div>
                    <div className="col-md-10">
                      <div className="profile-content">
                        <p className="profile-title">
                          <i className="fab fa-youtube"></i>{" "}
                          <span>
                            <Link className="media-link" to="#">
                              https://www.mywebsite.com
                            </Link>
                          </span>
                        </p>

                        <p className="profile-title">
                          <i className="fab fa-twitter"></i>{" "}
                          <span>
                            <Link className="media-link" to="#">
                              https://www.mywebsite.com
                            </Link>
                          </span>
                        </p>

                        <p className="profile-title">
                          <i className="fab fa-facebook-square"></i>{" "}
                          <span>
                            <Link className="media-link" to="#">
                              https://www.mywebsite.com
                            </Link>
                          </span>
                        </p>

                        <p className="profile-title">
                          <i className="fab fa-linkedin"></i>{" "}
                          <span>
                            <Link className="media-link" to="#">
                              https://www.mywebsite.com
                            </Link>
                          </span>
                        </p>

                        <p className="profile-title">
                          <i className="fab fa-instagram"></i>{" "}
                          <span>
                            <Link className="media-link" to="#">
                              https://www.mywebsite.com
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default Profile;
