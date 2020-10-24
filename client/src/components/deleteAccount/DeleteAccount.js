import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";


class DeleteAccount extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile } = this.props.profile;

    let deleteAccountContent;

    if (profile === null) {
      deleteAccountContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        deleteAccountContent = (
          <div>
            <p  className="lead text-muted">
              Welcome<Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
          
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        deleteAccountContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/createProfile" className="btn btn-lg btn-info">
              Create profile
            </Link>
          </div>
        );
      }
    } 

    return (
      <div className="deleteAccount">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="display-5">Delete account</h2>
              {deleteAccountContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

deleteAccount.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  DeleteAccount
);
