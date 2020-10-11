<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    //Local state
    this.state = {
      email: "",
      password: "",
      errors: {},
=======

import React, { Component } from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Facebook from "../Facebook";
import ForgotPassword from "./ForgotPassword";



class Login extends Component {
  
  constructor(){
    super();
    //local state of the component
    this.state = {
      email: '',
      password: '',
      errors: {}
>>>>>>> 0a33fcf6c146e209e79408020445ed1b069e7589
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

<<<<<<< HEAD
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
=======
  onChange(e){
    this.setState({[e.target.name]: e.target.value} )
  }

  onSubmit(e){
>>>>>>> 0a33fcf6c146e209e79408020445ed1b069e7589
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
<<<<<<< HEAD

    axios
      .post("/api/users/login", user)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your FINSTAGRAM account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
=======
    
    axios
      .post('/api/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const {errors} = this.state;
    return (
    <div class="login">
    <div class="container align-items-center mx-auto col-lg-6">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">Log In to Connexion</p>
          <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
              <input type="email"  className={classnames("form-control form-control-lg", {'is-invalid': errors.email})} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange}/>
              {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
            </div>
            <div className="form-group">
              <input type="password"  className={classnames("form-control form-control-lg", {'is-invalid': errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
              {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                )}
            </div>

            <div class="container mx-auto d-flex justify-content-around align-items-center mt-4">
            <button type="submit" className="btn btn-lg btn-light bg-light btn-outline-dark align-self-center p-3 col-5">Submit</button>

            <Link to="/forgotPassword">
            <button className="btn btn-lg btn-light btn-outline-dark bg-light align-self-center p-3 col-12">
                  Forgot Password
            </button>
            </Link>
            </div>

            <div class="container mx-auto d-flex justify-content-around align-items-center mt-5 rounded-lg">
             <button id="facebook-login">
             <Facebook />
             </button>  
               
            </div>    
          </form>
        </div>
      </div>
    </div>
  </div>
    )
>>>>>>> 0a33fcf6c146e209e79408020445ed1b069e7589
  }
}

export default Login;
