import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import classnames from "classnames";
import {changeAvatar} from "../../actions/authActions";

class ChangeAvatar extends Component {
  constructor() {
    super();
    //Local state
    this.state = {
      avatar: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      avatar: this.state.avatar,
    };

    this.props.changeAvatar(user, this.props.history);
  }
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="changeAvatar">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Change avatar </h1>
              <p className="lead text-center">
                change avatar of your CONNEXION app account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="String"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name,
                    })}
                    placeholder="Avatar"
                    name="avatar"
                    value={this.state.avatar}
                    onChange={this.onChange}
                  />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChangeAvatar.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { changeAvatar })(
  withRouter(ChangeAvatar)
);
